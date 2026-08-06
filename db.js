const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

const url = "mongodb+srv://jayeshdangi9371_db_user:DJqIGQKGozSgyFYT@cluster0.apyhprk.mongodb.net";

const connectDB = async () => {
    try {

        console.log("Connecting to MongoDB...");

        await mongoose.connect(url);

        console.log("MongoDB Connected");

    } catch (err) {

        console.log("Database Connection Error:", err.message);
        process.exit(1);

    }
};

module.exports = connectDB;