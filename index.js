require('dotenv').config()
require("./db")
// const express = require('express');
// const { getAllBooks, addNewBook, getBookById, updateBook, deleteBook } = require('./controllers/books.controller');
const app = express();
const port = process.env.port
const bookRouter=require("./routes/books.router")
const userRouter=require("./routes/user.router");
// const { auth } = require('./middleware/auth');

app.use(express.json())
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','views')

// app.get('/ejs',(req,res)=>{
//     res.render('books',{title:"ejs is working",message:"welcome to my `st ejs"})
// })

app.get('/',(req,res)=>{
    res.send("Welcome to my first Express project, type /api/books to get all books , well it worked but now i want to make sure that i can access it ")
})

//* pushing ne stuff for shymaa 
app.use("/api/user",userRouter)
// app.use(auth)
app.use("/api/books",bookRouter)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})