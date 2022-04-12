const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// model
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "recruter", "admin"],
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
});

module.exports = user = model("user", userSchema);
