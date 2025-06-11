const validate = require('./validate-middleware')

const errorMiddleware = (err,req,res,next) =>{
                    console.log(err);
                 const status = err.status || 500;
                 const message = err.message || "BACKEND ERROR";
                 const extraDetails = err.extraDetails || "Error From Backend"
                 console.log(status);
                 return res.status(status).json({message,extraDetails})
};

module.exports = errorMiddleware