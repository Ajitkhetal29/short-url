const express = require("express");

const app = express();

const urlRouter = require("./routes/url");
const connectToMongoDB = require("./connect");

const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => console.log("mongodb connected"))


app.use("/url", urlRouter);

app.listen(PORT, () => console.log(`server started on PORT : ${PORT}`));
