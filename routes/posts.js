const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the post area!");
});

router.get("/spec", (req, res) => {
  res.send("this is a spec post!");
});

module.exports = router;
