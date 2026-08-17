const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

const authenticate = require("../middleWare/auth");

const {
    validateProduct
} = require("../middleWare/validationMiddleware");

const upload = require("../middleWare/multer");

router.post(
    "/",
    authenticate,
    upload.single("image"),
    validateProduct,
    productController.createProduct
);

router.get(
    "/",
    productController.getAllProducts
);

router.get(
    "/:id",
    productController.getProductById
);

router.put(
    "/:id",
    authenticate,
    validateProduct,
    productController.updateProduct
);

router.delete(
    "/:id",
    authenticate,
    productController.deleteProduct
);


module.exports = router;