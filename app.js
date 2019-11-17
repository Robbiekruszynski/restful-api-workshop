const express = require("express");

const app = express();

const mongoose = require("mongoose");

require("dotenv/config");

////////Import Routes ////////
const postsRoute = require("./routes/posts");

////////Middleware//////// = function that executes when routes are being hit

app.use("/posts", postsRoute);

////////ROUTES////////

//get shoots back a message
//if I wanted to do a submit (like a form I would instead of get use post)
//there is also delete and post to add after app
app.get("/", (req, res) => {
  res.send("this is the home area!");
});

//////connect to DB via hardcode
mongoose.connect(
  //////connect to DB via hardcode
  process.env.DB_CONNECTION,
  //the next line is to kill the depreactionwarning
  { useNewUrlParser: true },
  () => console.log("connected to DataBase")
);

//start listening to the server
//what you use in the arg will be where it routes to i.e. port 3000 etc...
app.listen(3001);
