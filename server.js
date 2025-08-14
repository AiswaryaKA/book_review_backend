//import dotenv library
require('dotenv').config()//load environment
//import express library-1
const express = require('express')
//import cors-4
const cors = require('cors')
//import route-7
const route = require('./routes')
//import db connection file
require('./dbconnection') 

//create the server-express()-2
const bookReviewServer = express()

//server using cors-5
bookReviewServer.use(cors())
//it parses the json format-middleware -6
bookReviewServer.use(express.json())
//use routes - 8
bookReviewServer.use(route)

//create port-3
PORT = 4000 || process.env.PORT

bookReviewServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})