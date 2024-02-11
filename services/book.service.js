const Book = require("../model/book.model");


const findAllBooks = async ()=>{
    return await Book.find();

}
const createBook = async (book) =>{
    return await Book.create(book) 
}
{
// const updateBook=async(id)=>{
//     const book=await books.findOne({_id:id})
//     if(!book){
//         res.status(404).send("Book wasn't found , failed to update")
//         return
//     }
//     await Book.updateOne({_id:id},req.body)
//     return await Book.updateOne(book)
// }
}
module.exports = {
    findAllBooks,
    createBook
}