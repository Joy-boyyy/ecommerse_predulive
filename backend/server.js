const express = require("express");
require("dotenv").config();
const errHandle = require("./errHandleMiddleware/errMiddle");
const myRouter = require("./routes/allRoutes");
var cors = require("cors");
var cookieParser = require("cookie-parser");

const port = process.env.PORT || 9000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/user", myRouter);
app.use(errHandle);

app.listen(port, () => {
  console.log(`We are in server ${port}`);
});
