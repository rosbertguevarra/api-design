const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = User = mongoose.model("User", UserSchema);
