const mongoose = require("../db/dbConnection");

const wishList = new mongoose.Schema(
  {
    wishList: [{ type: Number }],
    refTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const UserWishlist = mongoose.model("UserWishlist", wishList);

module.exports = UserWishlist;
