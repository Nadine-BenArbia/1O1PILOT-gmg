const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// model
const jobSchema = new Schema({
  role: {
    type: String,
    //  required: true,
    enum: ["user", "recruter"],
  },

  name: {
    type: String,
  },

  location: {
    type: String,
  },
  companyName: {
    type: String,
  },

  skills: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = job = model("job", jobSchema);
