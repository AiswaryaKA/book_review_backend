//import the express
const express = require('express')
//import userController
const userController = require('./controllers/userController')


//instance
const route = new express.Router()

//path for register
route.post('/register' , userController.registerController)
//path for login
route.post('/login' , userController.loginController)



//routes export
module.exports = route