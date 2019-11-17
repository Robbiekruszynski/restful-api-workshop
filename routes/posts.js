const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//this is just to add when on local you can navigate to /posts/X and render that route
//posts/spec is the example

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().li;
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get("/spec", (req, res) => {
//   res.send("this is a spec post!");
// });

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
