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
    require: [ true, "Password must be provided" ]
  }
}, { timestamps: true });

schema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

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

const User = mongoose.model("User", schema);

module.exports = User;