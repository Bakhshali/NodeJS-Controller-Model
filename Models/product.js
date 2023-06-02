const { default: mongoose } = require("mongoose");

const productScheme = new mongoose.Schema({
    name: String,
    description: String,
    price: {
        type: Number,
        required: true
    },
    createdAt: { type: Date, default: Date.now }
})

const Product = mongoose.model("product", productScheme)

module.exports = { Product }