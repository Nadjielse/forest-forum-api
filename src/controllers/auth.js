const User = require("../models").User;

async function register(req, res, next) {
  res.send("User registered!");
}

async function login(req, res, next) {
  res.send("User logged in!");
}

module.exports = {
  register,
  login
};