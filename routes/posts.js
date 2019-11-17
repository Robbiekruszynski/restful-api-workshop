const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//this is just to add when on local you can navigate to /posts/X and render that route
//posts/spec is the example

router.get("/", (req, res) => {
  res.send("This is the post area!!");
});

router.get("/spec", (req, res) => {
  res.send("this is a spec post!");
});

router.post("/", (req, res) => {
  const post = new post({
    title: req.body.title,
    description: req.body.description
  });
  post
    .save()
    //adding a promise here
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;
