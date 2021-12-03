const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuth = async(req, res, next) => {
  try {
    const token = req.headers("authoriation");
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not Authorized" }] });
    }
  
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).send({ errors: [{ msg: "not Authorized" }] });
    }
    const findUser = await User.findById(decoded._id);
    req.User=findUser;
    
    next();


} catch (error) {
    return res.status(401).send({ errors: [{ msg: "not Authorized" }] });
  }

 
};
