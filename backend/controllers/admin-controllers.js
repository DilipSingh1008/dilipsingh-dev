 const { models } = require('mongoose');
const User = require('../model/user-model')
const contact = require('../model/contact-model')
const getAlluser = async(req,res,next)=>{
    try{
          
    const users = await User.find();
    if(!users || users.length ===0){
        return res.status(404).json({message:"No user Found"})

    }
      return res.status(200).json(users)

    } catch(err){
        next(err)
    }
}

const getAllContacts = async(req,res,next)=>{
    try{
          
        const users = await contact.find();
        if(!users || users.length ===0){
            return res.status(404).json({message:"No user Found"})
    
        }
       return res.status(200).json(users)
    
        } catch(err){
            next(err)
        }
}

module.exports = {getAlluser,getAllContacts}