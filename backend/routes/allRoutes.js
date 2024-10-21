const express = require("express");
const signup = require("../endPoints/register");
const login = require("../endPoints/login");
const UserWish = require("../endPoints/wishlist");
const AuthMiddleware = require("../middleware/authMiddleware");
const UserCarts = require("../endPoints/shoppingCart");
const cartInc = require("../endPoints/cartInc");

const myRouter = express.Router();

myRouter.route("/register").post(signup);
myRouter.route("/login").post(login);
myRouter.route("/wishlist").post(AuthMiddleware, UserWish);
myRouter.route("/addcart").post(AuthMiddleware, UserCarts);
myRouter.route("/cartamount").post(AuthMiddleware, cartInc);

module.exports = myRouter;