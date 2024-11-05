const express = require("express");
const signup = require("../endPoints/register");
const login = require("../endPoints/login");
const UserWish = require("../endPoints/wishlist");
const AuthMiddleware = require("../middleware/authMiddleware");
const UserCarts = require("../endPoints/shoppingCart");
const cartInc = require("../endPoints/cartInc");
const delShopping = require("../endPoints/deleteCard");
const fetchWishFun = require("../endPoints/gettingWishlist");
const fetchingCartData = require("../endPoints/gettingCart");
const userOrderFun = require("../endPoints/order");
const fetchingOrders = require("../endPoints/getOrderHistory");
const { order, verify } = require("../paymentCode/paymentCode");

const myRouter = express.Router();

myRouter.route("/register").post(signup);
myRouter.route("/login").post(login);
myRouter.route("/wishlist").post(AuthMiddleware, UserWish);
myRouter.route("/addcart").post(AuthMiddleware, UserCarts);
myRouter.route("/cartamount").post(AuthMiddleware, cartInc);
myRouter.route("/delcartitem/:cartIdToDel").delete(AuthMiddleware, delShopping);
myRouter.route("/wishlists").get(AuthMiddleware, fetchWishFun);
myRouter.route("/carts").get(AuthMiddleware, fetchingCartData);
myRouter.route("/order").post(AuthMiddleware, userOrderFun);
myRouter.route("/orderhistory").get(AuthMiddleware, fetchingOrders);

// ------------------- payment code

myRouter.route("/orderbuying").post(AuthMiddleware, order);
myRouter.route("/orderverify").post(AuthMiddleware, verify);

module.exports = myRouter;
