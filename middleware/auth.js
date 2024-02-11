const jwt=require("jsonwebtoken")
const { getUserService } = require("../services/user.service")
require("dotenv")
const auth = async (req,res,next)=>{

    try{
        const token=req.headers["jwt"]
        if(!token) return res.status(401).send({message:"unAuthorized user"})
        const payload=jwt.verify(token,"secretKey")
        const {email}=payload
        const user=await getUserService(email)
        if(!user)
        return  res.status(403).send({message: "Unauthorized User!"})
        next();
    }   
    catch(err){
        console.log("Error in auth file")
        console.log(err)
    }
}
module.exports ={auth};