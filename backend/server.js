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

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL
  credentials: true, // Allow credentials to be sent
};

app.use(cors(corsOptions));

app.use("/user", myRouter);

app.use(errHandle);

app.listen(port, () => {
  console.log(`We are in server ${port}`);
});
