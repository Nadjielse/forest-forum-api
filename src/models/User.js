const mongoose = require("mongoose");

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

const User = mongoose.model("User", schema);

module.exports = User;