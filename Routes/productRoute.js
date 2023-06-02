const express = require("express")
const { body } = require("express-validator")
const { productController } = require("../Controllers/productController")
const { validate } = require("../Middleware/validation")

const router = express.Router()

router.post("/",
    [body("name").notEmpty().withMessage("Name is required")],
    [body("description").notEmpty().withMessage("Description is required")],
    [body("price").isNumeric().withMessage("number olmalidir").notEmpty().withMessage("Price is not defined")],
    validate,
    productController.add)
router.get("/", productController.getAll)
router.get("/:id", productController.getById)

module.exports = router