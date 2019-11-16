const express = require("express");

const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("we are on our way to learning more about this!");
});

//start listening to the server
//what you use in the arg will be where it routes to i.e. port 3000 etc...
app.listen(3001);
