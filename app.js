const express = require("express");

const app = express();

//ROUTES

//get shoots back a message
//if I wanted to do a submit (like a form I would instead of get use post)
//there is also delete and post to add after app
app.get("/", (req, res) => {
  res.send("we are on our way, this is the home area!");
});

//always make sure to make the route call with a /
app.get("/posts", (req, res) => {
  res.send("we are on our way, this is the post area!");
});

//start listening to the server
//what you use in the arg will be where it routes to i.e. port 3000 etc...
app.listen(3001);
