const ShoppingCart = require("../schema/cart");

const fetchingCartData = async (req, res, next) => {
  const adminID = req.userID;

  try {
    const wishlist = await ShoppingCart.findOne({ refTo: adminID });

    if (!wishlist) {
      return res.status(404).json({ message: "Sorry No User Found" });
    } else {
      return res
        .status(200)
        .json({ message: "Cart Fetching", cartData: wishlist.cards });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = fetchingCartData;
