const UserWishlist = require("../schema/wishlistSchema");

const UserWish = async (req, res, next) => {
  const { cardId } = req.body;

  const adminID = req.userID;

  try {
    const userWish = await UserWishlist.findOne({ refTo: adminID });

    console.log(userWish);

    if (userWish) {
      const cardIndex = userWish.wishList.indexOf(cardId);
      if (cardIndex > -1) {
        userWish.wishList.splice(cardIndex, 1);
        await userWish.save();

        return res
          .status(200)
          .json({ message: "Card has been removed from Wishlist !!" });
      } else {
        userWish.wishList.push(cardId);
        await userWish.save();
        return res
          .status(200)
          .json({ message: "Card has been added in Wishlist !!" });
      }
    } else {
      const newWishlist = new UserWishlist({
        wishList: [cardId],
        refTo: adminID,
      });
      const cardWishAdded = await newWishlist.save();

      return res.status(200).json({
        message: "Card added to wishlist",
        wishList: cardWishAdded.wishList,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = UserWish;
