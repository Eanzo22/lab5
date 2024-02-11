const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { validateNewUser, validateLogin } = require("../validation/user.validator");
const { createUserService, getUserService ,getUserBooksService} = require("../services/user.service");
require("dotenv")
const createUser=async (req,res)=>{
    try{
        const {error,value}=validateNewUser(req.body);
        if(error) return res.status(400).send({massage:"Invalid inputs"})
        const {email,password}=value
        const isExist=await getUserService(email)
        if(isExist) return res.status(405).send({massage:"Already registered type /login to login"})
        const hashedPassword=await bcrypt.hash(password,10)
        // console.log(hashedPassword,password)
        const user = await createUserService({email:email,password:hashedPassword})
        res.send(user)
    }
    catch(error){
        console.log("Error in user create method",error)
    }
}
const loginUser=async (req,res)=>{
    try{
        const {error,value}=validateLogin(req.body)
        const {email,password}=value
        if(error) 
            return res.status(422).send({massage:"Wrong email or password inputs check their type"})
            const user=await getUserService(email)
            // console.log(user)
        if(!user) 
            return res.status(401).send({message:"Incorrect email or password..."})
        // console.log(user.)
        const isValidPassword=await bcrypt.compare(password,user.password)
        if(!isValidPassword)
            return res.status(401).send({message:"Incorrect email or password..."})
        const token=jwt.sign({email},"secretKey",{expiresIn:"1h"})
        process.env.jwtToken=token
        console.log(token)
        res.header({jwt:token}).send({token:token,message:"access granted",user:user})
        }
    catch(error){
        console.log(`Error in user Login method`)
        console.log(error)
    }
}
const getUserBooks = async (req,res) =>{
    const email = req.headers["email"]
    // console.log(email)
    const user =  await getUserBooksService(email);
    // console.log(user)
    res.render('books',{title:'Books', userBooks: user.books})
}
const getUserInfo = async (req,res) =>{
    const email = req.headers["email"]
    console.log(email)
    const user =  await getUserBooksService(email);
    console.log(user)
    res.render('profile',{title:'user', userData: user})
}
module.exports={
    createUser,
    loginUser,
    getUserBooks,
    getUserInfo
}