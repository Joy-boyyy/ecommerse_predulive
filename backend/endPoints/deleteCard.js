const ShoppingCart = require("../schema/cart");

const delShopping = async (req, res, next) => {
  const userID = req.userID;
  try {
    const findedUser = await ShoppingCart.findOne({ refTo: userID });
    const { cartIdToDel } = req.params;

    console.log("type of card id ==>", cartIdToDel);

    if (findedUser) {
      const gotIndex = findedUser.cards.findIndex(
        (findProp) => findProp.card.toString() === cartIdToDel
      );

      if (gotIndex === -1) {
        return res.status(404).json({ message: "Card not found in the cart" });
      }

      findedUser.cards.splice(gotIndex, 1);
      await findedUser.save();
      return res.status(200).json({ message: "Card Deleted" });
    } else {
      return res.status(404).json({ messge: "No any Card Founded" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = delShopping;
