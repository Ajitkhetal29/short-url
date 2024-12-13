const express = require("express");
const shortid = require("shortid");

const app = express();

const urlRouter = require("./routes/url");
const connectToMongoDB = require("./connect");
const URL = require("./models/url");

const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("mongodb connected")
);
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/url", urlRouter);

app.listen(PORT, () => console.log(`server started on PORT : ${PORT}`));
