const User = require("../models").User;

async function create(req, res, next) {
  try {
    const { username, password } = req.body;

    const user = await User.create({ username, password });

    const token = user.jwt();

    res.status(201).json({ token });
  } catch(err) {
    next(err);
  }
}

async function read(req, res) {
  try {
    const users = await User
      .find()
      .select("-password");
    
    res.status(200).json({ users });
  } catch(err) {
    next(err);
  }
}

async function readOne(req, res) {
  res.send("Nth user info.");
}

async function update(req, res) {
  res.send("User updated!");
}

async function destroy(req, res) {
  res.send("User destroyed");
}

module.exports = {
  create,
  read, readOne,
  update,
  destroy
};