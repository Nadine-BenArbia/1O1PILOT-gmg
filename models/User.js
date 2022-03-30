const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// model
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "recruter"],
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
