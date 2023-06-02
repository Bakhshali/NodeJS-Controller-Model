const { validationResult } = require("express-validator")

const validate = (req, resp, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return resp.status(422).json({
            errors: errors.array(),
        })
    }
    else {
        next()
    }
}

module.exports={
    validate
}