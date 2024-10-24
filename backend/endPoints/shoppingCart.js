// const ShoppingCart = require("../schema/cart");
// const UserCarts = async (req, res, next) => {
//   const { cardId, price, amount } = req.body;
//   const userID = req.userID;

//   try {
//     const userCart = await ShoppingCart.findOne({
//       refTo: userID,
//     });

//     if (userCart) {
//       const foundCardId = userCart.cards.findIndex(
//         (cardsProp) => cardsProp.card === cardId
//       );

//       if (foundCardId === -1) {
//         userCart.cards.push({ card: cardId, price, amount });
//         await userCart.save();

//         return res.status(200).json({ message: "Cart added !", success: true });
//       } else {
//         userCart.cards[foundCardId].amount += 1;
//         await userCart.save();
//         return res.status(200).json({ message: "Cart added !", success: true });
//       }
//     } else {
//       const ProductCard = new ShoppingCart({
//         cards: [{ card: cardId, price, amount }],
//         refTo: userID,
//       });

//       await ProductCard.save();

//       return res
//         .status(200)
//         .json({ message: "New Cart added !", success: true });
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = UserCarts;

// -----------------------------------------------------------------------------

const ShoppingCart = require("../schema/cart");
const UserCarts = async (req, res, next) => {
  const { cardId, price, amount, imgs, title } = req.body;
  const userID = req.userID;

  try {
    const userCart = await ShoppingCart.findOne({
      refTo: userID,
    });

    if (userCart) {
      const foundCardId = userCart.cards.findIndex(
        (cardsProp) => cardsProp.card === cardId
      );

      if (foundCardId === -1) {
        userCart.cards.push({ card: cardId, price, amount, imgs, title });
        await userCart.save();

        return res.status(200).json({ message: "Cart added !", success: true });
      } else {
        userCart.cards[foundCardId].amount += 1;
        await userCart.save();
        return res.status(200).json({ message: "Cart added !", success: true });
      }
    } else {
      const ProductCard = new ShoppingCart({
        cards: [{ card: cardId, price, amount, imgs, title }],
        refTo: userID,
      });

      await ProductCard.save();

      return res
        .status(200)
        .json({ message: "New Cart added !", success: true });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = UserCarts;
