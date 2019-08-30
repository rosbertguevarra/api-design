const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  date: {
    type: Date,
    default: Date.now()
  },
  author: String,
  body: String
});

module.exports = Blog = mongoose.model("Book", BlogSchema);
