import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Blog", BlogSchema);
