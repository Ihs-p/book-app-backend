const express = require("express")
const { loginUser } = require("./user.controller")

const route = express.Router()


route.post('/login',loginUser)


module.exports = route