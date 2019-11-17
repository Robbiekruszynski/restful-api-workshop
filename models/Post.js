const mongoose = require("mongoose");

//scheme = how that post looks
//title, disc, etc

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//this model is what I will see in the DB, so I should see Posts in there along with the schema
module.exports = mongoose.model("Posts", PostSchema);
