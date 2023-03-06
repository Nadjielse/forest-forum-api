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

async function read(req, res, next) {
  try {
    const posts = await Post.find();

    res.status(200).json({ posts });
  } catch(err) {
    next(err);
  }
}

async function readOne(req, res, next) {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if(!post) {
      return next(new Error(`Post with id ${id} not found`));
    }

    res.status(200).json({ post });
  } catch(err) {
    next(err);
  }
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