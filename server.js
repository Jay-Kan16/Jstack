const express = require("express");
const cookieParser = require("cookie-parser");

const connectDB = require("./db");

const authRoutes = require("./src/routes/auth.route");
const productRoutes = require("./src/routes/product.route");

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server Running Successfully"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});