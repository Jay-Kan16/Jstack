const express = require("express");
const app = express();
const userModel = require("./userModel"); 
const productModel = require("./productModel");
const bcrypt = require("bcrypt");
const connectDB = require("./db");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const authenticate = require("./authValidation");
app.use(cookieParser());
connectDB();
app.use(express.json());

const JWT_SECRET = "8f9a2b7c1d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2";

app.post("/register", async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const { name, id, email, password } = req.body;
    const userData = { name, id, email, password:hashedPassword};
    await userModel.create(userData);
    return res.status(201).json({ message: "User successfully created" });
  } catch (err) {
    console.error("error", err);
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async(req,res)=>{
     const { email , password} = req.body;
     const user = await userModel.findOne({email:req.body.email});     
     if(!user){
     return res.status(400).json({message: "user not found"});
     }
     const passwordMatch = await bcrypt.compare(password, user.password);
     if(!passwordMatch){
        return res.status(400).json({message: "Invalid password"});
     }
     //JWT token
     const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: "1h"});
     console.log("Token:", token);
     //cookie 
     res.cookie("token", token, {httpOnly: true});
     console.log("Cookie set successfully");
     return res.status(200).json({message: "Login successful"});
})

app.post("/logout",async(req,res)=>{
    res.clearCookie("token");
    console.log("logout successful");
    return res.status(200).json({message: "Logout successful"});
})
//Product crud operations
app.post("/product",async(req,res)=>{
  try{
    if(!req.body.name || !req.body.SKU || !req.body.price){
       return res.status(400).json({message:"Name,SKU and price are required"});
    }
    const productExist = await productModel.findOne({SKU:req.body.SKU});
    if(productExist){
        return res.status(400).json({message:"Product already exists"});
    }
    const {name,price,SKU,description,category} = req.body;
    const productData = {name,price,SKU,description,category}
    await productModel.create(productData);
    return res.status(201).json({message:"product has been created succesfully"});
  }
catch(err){
   console.error("Error",err);
}
})

app.get("/getAllProducts",async(req,res)=>{
    try{
        const {page=1,limit=10} = req.query;
        const products = await productModel.find().select("-__v").limit(limit * 1).skip((page - 1) * limit).sort({createdAt: -1});
        return res.status(200).json({success:true,page:page,limit:limit,data:products});
    }
    catch(err){
        console.error("Error",err);
        return res.status(500).json({success:false,message:"Server error"});
    }
})

app.get("/getProductByID/:id",async(req,res)=>{
    try{
        const product = await productModel.findById(req.params.id);
        return res.status(200).json({success:true,data:product});
    }
    catch(err){
        console.error("Error",err);
        return res.status(500).json({success:false,message:"Server error"});
    }
})

app.put("/updateSingleProduct/:id",async(req,res)=>{
    try{
        const product = await productModel.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        const updateProduct = await productModel.findByIdAndUpdate(req.params.id,req.body,{returnDocument:"after"});
        return res.status(200).json({success:true,data:updateProduct,message:"Product updated successfully"});
        console.log("Product updated successfully");
    }
    catch(err){
        console.error("Error",err);
        return res.status(500).json({success:false,message:"Server error"});
    }
})

app.delete("/deleteProduct/:id",authenticate,async(req,res)=>{
    try{
        if(!req.user.isAdmin){
            return res.status(403).json({message:"Access denied"});
        }

        const product = await productModel.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({success:true,message:"Product deleted successfully"});
    }
    catch(err){
        console.error("Error",err);
        return res.status(500).json({success:false,message:"Server error"});
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port   http://localhost:3000");
    console.log("Register page is on   http://localhost:3000/register");
    console.log("Login page is on   http://localhost:3000/login");
    console.log("Logout page is on   http://localhost:3000/logout");
    console.log("product page is on   http://localhost:3000/product");
    console.log("get all products page is on   http://localhost:3000/getAllProducts");
    console.log("get product by id page is on   http://localhost:3000/getProductByID/:id");
    console.log("update product page is on   http://localhost:3000/updateSingleProduct/:id");
    console.log("delete product page is on   http://localhost:3000/deleteProduct/:id");
})