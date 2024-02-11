
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        minLength: 3,
        maxLength: 512,
    },
    password:{
        type:String,
        minLength:8,
        maxLength:1024,
        required:true
    },
    createdOn:{
        type: Date,
        default: Date.now
    },
    books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }]
})

const User = mongoose.model('User', userSchema)
module.exports=User