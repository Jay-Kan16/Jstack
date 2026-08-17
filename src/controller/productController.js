const productModel = require("../Model/productModel");

const createProduct = async (req, res) => {
    try {
        const productExist = await productModel.findOne({
            SKU: req.body.SKU
        });

        if (productExist) {
            return res.status(400).json({
                message: "Product already exists"
            });
        }

const { name, price, SKU, description, category } = req.body;

const product = await productModel.create({
    name,
    price,
    SKU,
    description,
    category,
    image: req.file
        ? `/uploads/products/${req.file.filename}`
        : ""
});
        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

const getAllProducts = async (req, res) => {
    try {

        const { page = 1, limit = 10 } = req.query;

        const products = await productModel
            .find()
            .select("-__v")
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit))
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            page: Number(page),
            limit: Number(limit),
            data: products
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

const getProductById = async (req, res) => {
    try {

        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: product
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

const updateProduct = async (req, res) => {
    try {

        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

const deleteProduct = async (req, res) => {
    try {

        if (!req.user.isAdmin) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        await productModel.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};