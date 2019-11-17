const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
//function that executes when routes are being hit
// app.use("/posts", () => {
//   console.log("this is middleware running");
// });

app.use(bodyParser.json());

//import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("This is the home page");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to the DB")
);
app.listen(3005);
