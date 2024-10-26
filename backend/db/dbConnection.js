const mongoose = require("mongoose");

const localDataBase = "mongodb://127.0.0.1:27017/ecommerse";
// const mongoCLusterVar =
//   "mongodb+srv://as763649:anand763649@cluster0.4kbgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(localDataBase)
  .then(() => {
    console.log("Databse Connection successful");
  })
  .catch(() => {
    console.log("Something went wrong while connection with Database");
  });

module.exports = mongoose;
