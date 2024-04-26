const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  username: String,
  password: String,
  role: String,
});

module.exports = new mongoose.model("user", userSchema);
