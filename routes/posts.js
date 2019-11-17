const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//gets back all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get("/spec", async (req, res) => {
//   res.send("This is the spec page");
// });

//submits posts
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: er });
  }
});

//specific post
router.get("/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
});

module.exports = router;
