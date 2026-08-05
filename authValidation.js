const jwt = require("jsonwebtoken");
const userModel = require("./userModel");

const JWT_SECRET = "8f9a2b7c1d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2";

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Please login first."
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await userModel.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        req.user = user;

        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = authenticate;