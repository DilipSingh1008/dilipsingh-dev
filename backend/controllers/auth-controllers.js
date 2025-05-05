const User = require('../model/user-model');
const bcrypt = require('bcrypt')
///home page 
const home = async (req, res) => {
    try {

        res.status(200)
        res.send("welcome to world best serious")

    } catch (err) {

    }

}

// login page  **
   const login = async(req,res)=>{
           try{
            // console.log(req.body);
                const {email,password} = req.body
                const userExits = await User.findOne({email})
                // console.log(userExits);
                // console.log("fff");
                if(!userExits){
                    res.status(400).json({message:"Invalid Credentials"})
                }
                
                // const user = await bcrypt.compare(password,userExits.password)
                const user = await userExits.comparePassword(password)
                //  console.log(user); 

                if(user){
                    res.status(200).json({
                        msg:"Login Is Succesfully",
                        token: await userExits.genrateToken(),
                        userID: userExits._id.toString(),
                        isAdmin: userExits.isAdmin,

                    });
                } else{
                    res.status(401).json({message : "invalid email "})
                }

           } catch(err){
            res.status(500).send("Internal Server Error");
           }
   }

//register page

const register = async (req, res) => {
    try {
        // console.log(req.body);
        console.log("Creating user with data:", req.body);

        const { username, email, phone, password } = req.body
        //  let data = req.body
        const userExits = await User.findOne({ email })
        if (userExits) {
            return res.status(400).json(({ msg: "email is alredy exits" }))
        }

        // const saltRounds = 10;
        // const hash_password = await bcrypt.hash(password, saltRounds);

        const newUser = await User.create({
            username,
            email,
            phone,
            password,
        });

        res.status(200).json({
            msg:"Registration Is Succesfully",
            token: await newUser.genrateToken(),
            userID: newUser._id.toString(),
        });


    } catch (error) {
        // console.error("Register error:", err);
        // res.status(500).send("Internal Server Error");
        next(error)
    }

}

// user logic

const user = async (req, res) => {
    try {
        
      // const userData = await User.find({});
    //   const userData = req.user;
    const userData = req.user; // ✅ Get user data from middleware

      console.log(userData);
      return res.status(200).json({ msg: userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

module.exports = { home, register ,login,user };
