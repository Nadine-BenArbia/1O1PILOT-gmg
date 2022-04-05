const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
//------
const app = express();
//-------
//connect datebase

connectDB();

//router
app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/job", require("./router/job"));

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running in PORT=  ${PORT}`)
);
