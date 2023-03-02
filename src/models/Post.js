const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: [ true, "Title must be provided" ]
  },
  content: {
    type: String,
    required: [ true, "Content must be provided" ]
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [ true, "Author must be provided" ]
  }
}, { timestamps: true });

const Post = mongoose.model("Post", schema);

module.exports = Post;