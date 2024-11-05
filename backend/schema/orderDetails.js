// thsi contains all order details related user

const mongoose = require("../db/dbConnection");

const userOrder = new mongoose.Schema({
  cardsToBuy: [
    {
      id: { type: Number },
      price: { type: Number, default: 0 },
      totalAmount: { type: Number, default: 0 },
      imgs: { type: String, default: "" },
      title: { type: String, default: "" },
      status: { type: String, default: "Pending" },
    },
  ],
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
  refTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
});

const ShoppingOrder = mongoose.model("userOrders", userOrder);

module.exports = ShoppingOrder;
