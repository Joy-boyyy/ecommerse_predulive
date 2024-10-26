const ShoppingCart = require("../schema/cart");

const fetchingCartData = async (req, res, next) => {
  const adminID = req.userID;

  try {
    const wishlist = await ShoppingCart.findOne({ refTo: adminID });

    if (wishlist) {
      return res
        .status(200)
        .json({ message: "Cart Fetching", cartData: wishlist.cards });
    }

    // if (!wishlist) {
    //   return res.status(404).json({
    //     message: "Connected but no any cart Data founded yet, Please Add !!!",
    //   });
    // } else {
    //   return res
    //     .status(200)
    //     .json({ message: "Cart Fetching", cartData: wishlist.cards });
    // }
  } catch (err) {
    next(err);
  }
};

module.exports = fetchingCartData;
