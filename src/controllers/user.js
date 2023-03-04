const bcrypt = require("bcryptjs");

const User = require("../models").User;

async function cryptPassword(password) {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
}

async function create(req, res, next) {
  try {
    const { username } = req.body;
    let { password } = req.body;

    if(password) {
      password = await cryptPassword(password);
    }

    const user = await User.create({ username, password });

    const token = user.jwt();

    res.status(201).json({ token });
  } catch(err) {
    next(err);
  }
}

async function read(req, res, next) {
  try {
    const users = await User
      .find()
      .select("-password");
    
    res.status(200).json({ users });
  } catch(err) {
    next(err);
  }
}

async function readOne(req, res, next) {
  try {
    const { username } = req.params;

    const user = await User
      .findOne({ username })
      .select("-password");

    res.status(200).json({ user });
  } catch(err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.user;
    const { newUsername, password } = req.body;
    let { newPassword } = req.body;

    const user = await User.findById(id);

    if(!user) {
      return next(new Error(`User with id ${id} not found`));
    }

    if(!password){
      return next(new Error("Password needs to be provided"));
    }
    if(!await user.checkPassword(password)){
      return next(new Error("Wrong password"));
    }
    
    if(newPassword) {
      newPassword = await cryptPassword(newPassword);
    }
    
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        username: newUsername,
        password: newPassword
      },
      { new: true, runValidators: true }
    );

    const token = updatedUser.jwt();
    
    res.status(200).json({ token });
  } catch(err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.user;
    const { password } = req.body;

    const user = await User.findById(id);

    if(!user) {
      return next(new Error(`User with id ${id} not found`));
    }

    if(!password){
      return next(new Error("Password needs to be provided"));
    }
    if(!await user.checkPassword(password)){
      return next(new Error("Wrong password"));
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ user });
  } catch(err) {
    next(err);
  }
}

module.exports = {
  create,
  read, readOne,
  update,
  destroy
};