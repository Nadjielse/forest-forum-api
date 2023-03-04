const User = require("../models").User;

async function register(req, res, next) {
  res.redirect(307, "/api/v1/users/");
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    if(!username) {
      return next(new Error("Username must be provided"));
    }
    if(!password) {
      return next(new Error("Password must be provided"));
    }

    const user = await User.findOne({ username });

    if(!user) {
      return next(new Error(`User with username ${username} not found`));
    }

    if(!await user.checkPassword(password)) {
      return next(new Error("Wrong password"));
    }

    const token = user.jwt();

    res.status(200).json({ token });
  } catch(err) {
    next(err);
  }
}

module.exports = {
  register,
  login
};