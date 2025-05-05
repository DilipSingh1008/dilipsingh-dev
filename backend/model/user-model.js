const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userShecma = new mongoose.Schema({
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }, 
    isAdmin:{
        type:Boolean,
        default: false,
    },
})
// ** Very important

   //secure password
   userShecma.pre('save', async function (next) {
    //    console.log("pre data",this);
    const user = this
    if(!user.isModified("password")){
        next();
    }

    try{
        const saltRounds = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password, saltRounds);
        user.password = hash_password
        console.log();
    } catch(err){
        next(err)
    }
   })
 
//    campare password
userShecma.methods.comparePassword = async function(plainPassword){
    // console.log(this.password);
    return await bcrypt.compare(plainPassword,this.password)
}

//    json web token    
userShecma.methods.genrateToken = async function() {
           try{
             return jwt.sign({
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
             },
              process.env.JWT_SECRET_KEY,
              {
                expiresIn: "30d"
              },
            )
           } catch(err){
            console.error(err);
           }

}
   

// define the model or the collection name 
  const User = new mongoose.model("User",userShecma);

  module.exports = User