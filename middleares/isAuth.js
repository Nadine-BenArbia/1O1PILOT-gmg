const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not Authorized1" }] });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).send({ errors: [{ msg: "not Authorized2" }] });
    }
    const findUser = await User.findById(decoded._id);
    req.user = findUser;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({ errors: [{ msg: "not Authorized11" }] });
  }
};
