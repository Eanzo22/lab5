const {v4:uuid} = require("uuid");
const { validateNewBook,validateUpdateBook } = require("../validation/book.validator");
const Book = require("../model/book.model");
const { findAllBooks,createBook } = require("../services/book.service");
const bcrypt=require("bcrypt")

const addNewBook=async (req,res)=>{
    {// const book={
    //         id:books.length+1,
    //         title:req.body.title,
    //         author:req.body.author,
    //         price:parseFloat(req.body.price)
    //         }
    // books.push(book)
    }
    const {error,value}=validateNewBook(req.body)
    let {bookName,description}=value
    if(error){
        res.status(400).send({error:"Invalid book inputs"})
        return;
    }
    const book=await createBook({bookName,description});
    description="edited desc"
    res.send(book);
}
const getAllBooks= async (req,res)=>{
    const books= await findAllBooks()
    res.send(books);
}
const getBookById=async (req ,res)=>{
    // const id = parseInt(req.params.id);
    // const book = books.find((x)=> x.id===id)
    const {id}=req.params;
    const book=await Book.findOne({_id:id})
    if(!book){
        return res.status(404).json({message:'The Book is not found'})
    }
    res.send(book);
}
const updateBook= async(req,res)=>{
    // const id =parseInt(req.params.id)
    // const book = books.find((x)=> x.id===id)
    const{id}= req.params;
    const book=await books.findOne({_id:id})
    if(!book){
        res.status(404).send("Book wasn't found , failed to update")
        return
    }
    {
        // book.title=req.body.title;
        // book.author=req.body.author;
        // book.price=parseFloat(req.body.price)
    }
    const {error,value}=validateUpdateBook(book)
    if(error){
        res.status(400).send({error:"Invalid book inputs"})
        return;
    }
    await Book.updateOne({_id:id},req.body)
    const updatedBook=await Book.findById(id)
    res.send(updatedBook);
}
const deleteBook=async (req,res)=>{
    // const book = books.find((x)=> x.id===parseInt(req.params.id))
    // console.log(book)
    const{id}=req.params;
    const book=await Book.findOne({_id:id})
    if(!book){
        res.status(404).send("Deletion wasn't complete , can't find the book")
        return
    }
    // const index = books.indexOf(book)
    // books.splice(index,1)
    const result=await Book.deleteOne({_id:id});
    res.send('Delete Successful')

}
module.exports={
    addNewBook,
    getAllBooks,
    updateBook,
    deleteBook,
    getBookById};