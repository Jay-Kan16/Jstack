const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Model/userModel");

const JWT_SECRET = "8f9a2b7c1d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2";

const register = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({
            email: req.body.email
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email"
            });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const { name, id, email } = req.body;

        const userData = {
            name,
            id,
            email,
            password: hashedPassword
        };

        await userModel.create(userData);

        return res.status(201).json({
            message: "User successfully created"
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.cookie("token", token, {
            httpOnly: true
        });

        return res.status(200).json({
            message: "Login Successful"
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};

const logout = async (req, res) => {
    res.clearCookie("token");

    return res.status(200).json({
        message: "Logout Successful"
    });
};

module.exports = {
    register,
    login,
    logout
};