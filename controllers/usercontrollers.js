const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    //name,email,password,phone

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).send({ errors: [{ msg: "email is unique" }] });
    }
    //new user

    const newUser = new User({ ...req.body });

    //**** password
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);
    newUser.password = hashedPassword;
    // create token
    const token = jwt.sign(
      {
        _id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    //save user
    console.log(newUser);
    await newUser.save();
    res.send({ msg: "register success", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.send({ errors: [{ msg: "can not register the user" }] });
  }
};
// exports.deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let res = await user.deleteOne({ _id: id });
//     res.send({ msg: "deleted succ" });
//   } catch (error) {
//     res.status(400).send({ msg: "can not delete" });
//   }
// };
exports.login = async (req, res) => {
  try {
    //email+password
    const { email, password } = req.body;
    //check email
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).send({ errors: [{ msg: "error password" }] });
    }
    //checkpassword matching passworld
    //findUser.password==password
    const testPassword = bcrypt.compareSync(password, findUser.password);
    if (!testPassword) {
      return res.status(400).send({ errors: [{ msg: "error password" }] });
    }
    //token
    const token = jwt.sign(
      {
        _id: findUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    // res

    return res.status(200).send({ msg: "login succ", user: findUser, token });
  } catch (error) {
    return res.status(400).send({ msg: "login denied", error });
  }
};

exports.getAlluser = async (req, res) => {
  try {
    //    step 1 GETTING the data from databse
    const userlist = await User.find();
    // step2: when i get the list from the previous step i send it as a result
    res.send({ User: userlist, msg: "get all users" });
    console.log(getAlluser);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "can not get", error });
  }
};
