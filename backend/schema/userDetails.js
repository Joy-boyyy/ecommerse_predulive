// right now i am not using this will add later

const mongoose = require("../db/dbConnection");

const userContactDetails = new mongoose.Schema({
  detail: {
    name: { type: String, required: true }, // Corrected from Text to String
    pincode: { type: String, required: true },
    locality: { type: String, required: true }, // Corrected from Text to String
    phNumberOne: { type: String, required: true }, // Correct usage of String for phone numbers
    phNumberTwo: { type: String, default: "" },
    address: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    landmark: { type: String, default: "" },
  },
  refTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User model
});

const personalInfo = mongoose.model("userpersonaldetails", userContactDetails);

module.exports = personalInfo;
