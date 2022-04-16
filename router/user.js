const express = require("express");
const {
  Register,
  login,
  getAlluser,
} = require("../controllers/usercontrollers");
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
// get all users
router.get("/", getAlluser);

// DELETE => DELETE ()
// @Route delete a job
// @ Method : DELETE
// @data: ID req.params
// Path: http://localhost:5000/api/job/:id
//router.delete("/:id", isAuth, deleteUser);

module.exports = router;
