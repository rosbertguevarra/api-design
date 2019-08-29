const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: String,
  date: {
    type: Date,
    default: Date.now()
  },
  author: String,
  description: String,
  price: Number
});

module.exports = Book = mongoose.model("Book", BookSchema);
