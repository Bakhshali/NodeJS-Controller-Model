const express = require("express")
const { body } = require("express-validator")
const { webuserController } = require("../Controllers/webuserController")
const { validate } = require("../Middleware/validation")
const { route } = require("./productRoute")

const router = express.Router()

router.post("/",
    [body("name").notEmpty().withMessage("Name is required")],
    [body("surname").notEmpty().withMessage("Surname is required")],
    [body("email").isEmail().withMessage("@ characater is should be").notEmpty().withMessage("Email is not defined")],
    [body("password").notEmpty().withMessage("Password is required")],
    validate,
    webuserController.add)

router.get("/", webuserController.getAll)

router.post("/login",
    [body("email").notEmpty().withMessage("Email is required!")],
    [body("password").notEmpty().withMessage("Password is required!")],
    validate,
    webuserController.login
)
module.exports = router