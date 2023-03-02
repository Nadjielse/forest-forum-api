const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect(process.env.MONGO_URI);
}

module.exports = connect;