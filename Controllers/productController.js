const { json } = require("express");
const { Product } = require("../Models/product");

const productController = {
    getAll: async (req, resp) => {
        const data = await Product.find()
        resp.json(data)
    },
    add: (req, resp) => {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        })
        newProduct.save()
        resp.json(newProduct)
    },
    getById: async (req, resp) => {
        const id = req.params.id
        const data = await Product.findById(id)
        resp.send(data)
    },
}

module.exports = {
    productController
}