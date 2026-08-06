const validateRegister = (req, res, next) => {
    const { name, id, email, password } = req.body;

    if (!name || !id || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    next();
};

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and Password are required"
        });
    }

    next();
};

const validateProduct = (req, res, next) => {
    const { name, SKU, price } = req.body;

    if (!name || !SKU || price === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, SKU and Price are required"
        });
    }

    next();
};

module.exports = {
    validateRegister,
    validateLogin,
    validateProduct
};