const express = require("express");
const shortid = require("shortid");
const path = require("path");
var cookieParser = require("cookie-parser");

const app = express();

const staticRouter = require("./routes/staticUrl");
const urlRouter = require("./routes/url");
const userRouter = require("./routes/user");

const connectToMongoDB = require("./connect");
const URL = require("./models/url");
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/auth");

const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("mongodb connected")
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json());

app.use("/url", restrictToLoggedInUserOnly, urlRouter);
app.use("/", checkAuth, staticRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`server started on PORT : ${PORT}`));
