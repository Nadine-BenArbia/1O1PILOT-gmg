const { check, validationResult } = require("express-validator");

exports.registerValidation = () => [
  check("email", "email is required").isEmail(),
  check("password").isLength({ min: 8 }).notEmpty(),
  check("name").notEmpty(),
];

exports.loginValidation = () => [
  check("email", "email is required").isEmail(),
  check("password", "check password").isLength({ min: 8 }).notEmpty(),
];

exports.Validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
