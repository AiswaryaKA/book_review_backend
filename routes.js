//import the express
const express = require('express')
//import userController
const userController = require('./controllers/userController')
//import bookController
const bookController = require('./controllers/bookController')


//instance
const route = new express.Router()

//path for register
route.post('/register' , userController.registerController)
//path for login
route.post('/login' , userController.loginController)

route.post('/add-book' , bookController.addBookController)


//routes export
module.exports = route