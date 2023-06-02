const { default: mongoose } = require("mongoose");

const webUserScheme = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model("user", webUserScheme)

module.exports = { User }