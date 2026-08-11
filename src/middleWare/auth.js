const jwt = require("jsonwebtoken");
const userModel = require("../Model/userModel");

const JWT_SECRET =
    "8f9a2b7c1d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2";

const authenticate = (...roles) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies.token;

            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "Please login first"
                });
            }

            const decoded = jwt.verify(token, JWT_SECRET);

            const user = await userModel
                .findById(decoded.id)
                .select("-password");

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }

            req.user = user;

            if (roles.length > 0 && !roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Access denied"
                });
            }

            next();

        } catch (err) {
            console.error(err);

            return res.status(401).json({
                success: false,
                message: "Invalid or expired token"
            });
        }
    };
};

module.exports = authenticate;