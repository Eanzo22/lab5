const mongoose = require("mongoose")

const dburl = process.env.DB_URI

const dbConnection = mongoose.connect(dburl)
.then(()=> console.log("Connected to MongoDB..."))
.catch((err)=> console.log("could not connect to MongoDB...",err))


module.exports = dbConnection;