const mongoose = require("mongoose")

const bookSchema= mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        minLength: 3,
        maxLength: 512,
    },
    description:{
        type:String,
        minLength: 3,
        maxLength: 512,
    },
    createdOn:{
        type: Date,
        default: Date.now
    }
})


const Book = mongoose.model('Book', bookSchema)
module.exports = Book;