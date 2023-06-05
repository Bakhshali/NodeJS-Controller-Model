const { json } = require("express");
const { User } = require("../Models/webUser");

const webuserController = {
    getAll: async (req, resp) => {
        const data = await User.find()
        resp.json(data)
    },
    add: (req, resp) => {
        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        })
        newUser.save()
        resp.json(newUser)
    },
    getById: async (req, resp) => {
        const id = req.params.id
        const data = await User.findById(id)
        resp.send(data)
    },
    delete: async (req, resp) => {
        const id = req.params.id
        const data = await User.findByIdAndDelete(id)
        resp.send(data)
    },
    edit: async (req, resp) => {
        const id = req.params.id
        const data = await User.findByIdAndUpdate(id, {
            name: req.body.name,
            surname: req.body.surname
        })
        resp.send(data)
    },

    login: async (req, resp) => {
        const loginUser = await User.find({
            email: req.body.email,
            password: req.body.password
        })
        if (loginUser) {
            resp.json(loginUser)
        }
        else {
            return resp.status(404).json("User not found");
        }
    }
}

module.exports = {
    webuserController
}