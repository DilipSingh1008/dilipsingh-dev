const mongoose = require("mongoose")
 const URI = process.env.MONGODB_URI

// mongoose.connect(URI)

const connectDb = async()=>{
    try{
        await mongoose.connect(URI)
        console.log("data base is connectt"); 


    } catch(err){
        console.error("database is not connect")

    }
}

module.exports = connectDb