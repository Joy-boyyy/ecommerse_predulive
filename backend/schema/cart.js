const mongoose = require("../db/dbConnection");

const shoppingCart = new mongoose.Schema({
  cards: [
    {
      card: { type: Number },
      price: { type: Number, default: 0 },
      amount: { type: Number, default: 0 },
      imgs: { type: String, default: "" },
      title: { type: String, default: "" },
    },
  ],
  refTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ShoppingCart = mongoose.model("shoppingCart", shoppingCart);

module.exports = ShoppingCart;
