const UserWishlist = require("../schema/wishlistSchema");

const fetchWishFun = async (req, res, next) => {
  const adminID = req.userID;

  try {
    const wishlist = await UserWishlist.findOne({ refTo: adminID });

    if (wishlist) {
      return res
        .status(200)
        .json({ message: "Wishlist Fetching", wishData: wishlist.wishList });
    }

    // if (!wishlist) {
    //   return res.status(404).json({
    //     message: "Connected but no wishlist founded yet, please add !!!",
    //   });
    // } else {
    //   return res
    //     .status(200)
    //     .json({ message: "Wishlist Fetching", wishData: wishlist.wishList });
    // }
  } catch (err) {
    next(err);
  }
};

module.exports = fetchWishFun;
