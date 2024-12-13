const express = require("express");
const shortid = require("shortid");
const path = require("path");

const app = express();

const urlRouter = require("./routes/url");
const connectToMongoDB = require("./connect");
const URL = require("./models/url");

const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("mongodb connected")
);
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/url", urlRouter);
app.get("/test", async(req, res) => {
  const allURLS = await URL.find({}) 
  return res.render("home", {
    urls : allURLS
  })
})

app.listen(PORT, () => console.log(`server started on PORT : ${PORT}`));
