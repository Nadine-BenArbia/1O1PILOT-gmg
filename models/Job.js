const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// model
const jobSchema = new Schema({
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
  id_user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "recruter", "admin"],
  },
});

module.exports = job = model("job", jobSchema);
