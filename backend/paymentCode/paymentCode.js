const Razorpay = require("razorpay");
const crypto = require("crypto");

const order = (req, res, next) => {
  try {
    const razorpayVar = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    if (!req.body) {
      return res.status(400).json({ message: "Please provide user data" });
    }
    const { price } = req.body;

    const options = {
      amount: price * 100, // amount is in paise
      currency: "INR",
      receipt: `${price}-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`,
    };

    razorpayVar.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json({
          message: "somethig went wrong while order creating",
          success: false,
        });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "Order created", order: order });
      }
    });
  } catch (err) {
    next(err);
  }
};

// order verification

const verify = async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  console.log("req.body", req.body);

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  try {
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    console.log(razorpay_signature === expectedSign);

    const isAuthenticated = expectedSign === razorpay_signature;

    if (isAuthenticated) {
      return res
        .status(200)
        .json({ message: "Payment verified successfully", success: true });
    } else {
      return res
        .status(400)
        .json({ message: "Payment verification failed", success: false });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { order, verify };

// const Razorpay = require("razorpay");
// const crypto = require("crypto");

// const order = async (req, res, next) => {
//   try {
//     const razorpayVar = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_KEY_SECRET,
//     });

//     if (!req.body) {
//       return res.status(400).json({ message: "Please provide user data" });
//     }
//     const userData = req.body;

//     const orderDetail = await razorpayVar.orders.create(userData);

//     if (!orderDetail) {
//       return res.status(400).json({ message: "Failed to create order" });
//     } else {
//       return res.status(200).json({
//         message: "Order created successfully",
//         order: orderDetail,
//         success: true,
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// // order verification

// const verify = async (req, res, next) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   console.log("req.body", req.body);

//   const sign = razorpay_order_id + "|" + razorpay_payment_id;

//   try {
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     console.log(razorpay_signature === expectedSign);

//     const isAuthenticated = expectedSign === razorpay_signature;

//     if (isAuthenticated) {
//       return res
//         .status(200)
//         .json({ message: "Payment verified successfully", success: true });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "Payment verification failed", success: false });
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = { order, verify };
