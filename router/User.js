const express = require("express");
const { Register, login } = require("../controllers/usercontrollers");
const { isAuth } = require("../middlweares/isAuth");
const {
  registerValidation,
  Validation,
  loginValidation,
} = require("../middlweares/userValidation");

const router = express.Router();

// regester : create account
router.post("/register", registerValidation(), Validation, Register);

// login
router.post("/login", loginValidation(), Validation, login);

router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "authentifie", user: req.user });
});

module.exports = router;
