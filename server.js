const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Hello World" });
});

app.listen(5000, () => console.log("Server running at 5000"));
