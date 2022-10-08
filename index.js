const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mydb")
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Backend server is running!");
});
