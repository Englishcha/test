const express = require("express");
const User = require("./models/userModel");
require("dotenv").config();
const app = express();
// require("./config/db");

app.get("/", async (req, res) => {
  const user = await User.find({});
  res.send({ msg: "Hello World" });
});

app.listen(5000, () => console.log("Server running at 5000"));
