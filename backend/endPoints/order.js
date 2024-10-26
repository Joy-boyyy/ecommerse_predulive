const ShoppingOrder = require("../schema/orderDetails");

const userOrderFun = async (req, res, next) => {
  const userID = req.userID;
  const userVar = req.body;
  const { allCards, details } = userVar;

  try {
    const foundedUserVar = await ShoppingOrder.findOne({ refTo: userID });

    if (!foundedUserVar) {
      const newOrder = new ShoppingOrder({
        cardsToBuy: allCards,
        detail: details,
        refTo: userID,
      });

      await newOrder.save();
      return res
        .status(200)
        .json({ success: true, message: "Order Successful !!!" });
    } else {
      if (allCards.length > 0) {
        foundedUserVar.cardsToBuy = foundedUserVar.cardsToBuy.concat(allCards);
      }

      Object.assign(foundedUserVar.detail, details);
      await foundedUserVar.save();
      return res
        .status(200)
        .json({ success: true, message: "Order Successful !!!" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = userOrderFun;
