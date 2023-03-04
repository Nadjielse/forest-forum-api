const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: [ true, "Username must be provided"],
    unique: [ true, "Username must be unique" ]
  },
  password: {
    type: String,
    required: [ true, "Password must be provided" ]
  }
}, { timestamps: true });

schema.methods.jwt = function() {
  return jwt.sign(
    {
      id: this._id,
      username: this.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME
    }
  );
}

schema.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", schema);

module.exports = User;