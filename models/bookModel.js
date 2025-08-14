//import mongoose
const mongoose = require('mongoose')


//schema
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    coverImageURL:{
        type:String,
        required:true
    },
})


const books = mongoose.model("books" , bookSchema)
module.exports = books