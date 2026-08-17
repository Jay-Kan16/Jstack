const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        SKU: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        description: {
            type: String,
            default: ""
        },

        category: {
            type: String,
            default: "General"
        },

        image: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);