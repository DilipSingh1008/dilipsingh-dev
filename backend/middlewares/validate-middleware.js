
const validate = (schema) => async(req,res,next)=>{
       
    try{
       const parseBody = await schema.parseAsync(req.body)
       req.body = parseBody;
       next();

    } catch(err){
        // console.log(err);
        // const messages = err.errors[0].message
        // res.status(400).json({messages})
           const status = 422;
           const messages = err.errors[0].message
           const extraDetails = "fill the properly"
        const error = {status,messages,extraDetails}    
         console.log(error);
        next(error)
    
    }


}

module.exports = validate