const User=require("../model/user.model")
const Book=require("../model/book.model")

const createUserService =async ({email,password})=>{
    try{
        console.log({email,password})
        return await User.create({email:email,password:password});
    }
    catch(error){
        console.log(`Error in creating user: ${error}`);
    }
}
const getAllUsersService = async ()=>{
    return await User.find();
}

const getUserService=async (email)=>{
    try{
        return  await User.findOne({email}).populate("books");
    }
    catch(error){
        console.log(`Error in Finding user ${error}`)
    }
}
const getUserBooksService = async (email)=>{
   return await User.findOne({email}).populate('books');
}
module.exports ={
    createUserService,
    getAllUsersService,
    getUserService,
    getUserBooksService
}