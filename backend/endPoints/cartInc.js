const ShoppingCart = require("../schema/cart");

const cartInc = async (req, res, next) => {
  const userID = req.userID;
  const { cardId, purpose, amount } = req.body;

  try {
    const userCart = await ShoppingCart.findOne({
      refTo: userID,
    });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (purpose === "inc") {
      const filteredData = userCart.cards.filter(
        (filterProp) => filterProp.card === cardId
      );
      filteredData[0].amount = filteredData[0].amount + amount;
      await userCart.save();
      res.status(200).json({ message: "Added more simmilar product" });
    } else {
      const filteredData = userCart.cards.filter(
        (filterProp) => filterProp.card === cardId
      );

      if (filteredData[0].amount > 1) {
        filteredData[0].amount = filteredData[0].amount - amount;
        await userCart.save();
        return res.status(200).json({ message: "Removed simmilar product" });
      } else {
        return res
          .status(200)
          .json({ message: "There is just one product left in Cart" });
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = cartInc;
