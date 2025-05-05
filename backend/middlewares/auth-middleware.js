const jwt = require("jsonwebtoken");
// const User = require("../models/user-model");
const User = require('../model/user-model')

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response.
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  // console.log(jwtToken);

  try {
    // Verifying the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log(isVerified);

    // getting the complete user details & also we don't want password to be sent
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    if (!userData) {
      return res.status(401).json({ message: "User not found" });
    }
    //     if (!userData) {
    //   return res.status(401).json({ message: "User not found" });
    // }

    // // ✅ Check admin
    // if (!userData.isAdmin) {
    //   return res.status(403).json({ message: "Forbidden: Admins only" });
    // }

    // console.log(userData);
    req.token = token;
    req.user = userData;
    req.userID = userData._id;
    


    // Move on to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;