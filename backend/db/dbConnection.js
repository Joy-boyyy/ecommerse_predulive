const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerse")
  .then(() => {
    console.log("Databse Connection successful");
  })
  .catch(() => {
    console.log("Something went wrong while connection with Database");
  });

module.exports = mongoose;
