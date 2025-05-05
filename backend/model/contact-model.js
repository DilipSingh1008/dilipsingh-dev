const mongoose = require('mongoose');
// const { string } = require('zod');
// console.log(mongoose.model);
const contactSchema = new mongoose.Schema({

          username:{
            type:String,
            required:true,
          },
          email:{
            type:String,
            required:true,
          },
          message:{
            type:String,
            required:true,
          }

})

// create a model collection

const Contact = new mongoose.model('contact',contactSchema);
module.exports = Contact