const joi=require("joi");

const validateNewUser = (user)=>{
    const schema = joi.object({
        email : joi.string().min(3).max(512).required(),
        password: joi.string().min(3).max(512).required(),
        createdOn: joi.date()
    })
    return schema.validate(user)
};
const validateLogin=(user)=>{
        const schema = joi.object({
        email : joi.string().min(3).max(512).required(),
        password: joi.string().min(3).max(512).required(),
    })
    return schema.validate(user)
}
module.exports = {validateNewUser,validateLogin}