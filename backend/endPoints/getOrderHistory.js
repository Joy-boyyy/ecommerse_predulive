const userOrder = require("../schema/orderDetails");

const fetchingOrders = async (req, res, next) => {
  const adminID = req.userID;

  try {
    const allOrderAdmin = await userOrder.findOne({ refTo: adminID });

    if (allOrderAdmin) {
      if (allOrderAdmin.cardsToBuy.length > 0) {
        const allOrders = allOrderAdmin.cardsToBuy;
        const orderDetails = allOrderAdmin.detail;
        const orderDate = allOrderAdmin.orderDate;
        const userOrder = {
          allOrders,
          orderDetails,
          orderDate,
        };
        return res
          .status(200)
          .json({ message: "Orders Fetching", userOrderData: userOrder });
      } else {
        return res.status(200).json({ message: "No any Orders Available" });
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = fetchingOrders;
