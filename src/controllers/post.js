const Post = require("../models").Post;

async function create(req, res, next) {
  try {
    const { id: author } = req.user;
    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
      author
    });

    res.status(201).json({ post });
  } catch(err) {
    next(err);
  }
}

async function read(req, res) {
  res.send("Post info.");
}

async function readOne(req, res) {
  res.send("Nth post info.");
}

async function update(req, res) {
  res.send("Post updated!");
}

async function destroy(req, res) {
  res.send("Post destroyed");
}

module.exports = {
  create,
  read, readOne,
  update,
  destroy
};