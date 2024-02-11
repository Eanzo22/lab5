const joi = require('joi');

const validateNewBook = (book)=>{
    const schema = joi.object({
        bookName : joi.string().min(3).max(512).required(),
        description: joi.string().min(3).max(512),
        createdOn: joi.date()
    })
    return schema.validate(book)

};

const validateUpdateBook = (book)=>{
    const schema = joi.object({
        bookName : joi.string().min(3).max(512),
        description: joi.string().min(3).max(512),
        createdOn: joi.date()
    })
    return schema.validate(book)
}

module.exports ={
    validateNewBook,
    validateUpdateBook
}