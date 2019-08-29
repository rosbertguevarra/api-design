const express = require("express");
const router = express.Router();
const Book = require("./models/Books");

router.get("/data", async (req, res) => {
  const books = await Book.find({});
  res.status(200).json(books);
});
router.put("/data/:id", async (req, res) => {
  const book = await Book.findById({ _id: req.params.id }, err);
  if (err) {
    throw err;
  } else {
    res.status(200).json(book);
  }
});

router.post("/data", (req, res) => {
  let newData = {
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    date: req.body.date
  };
  Book.create(newData, err => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(newData);
    }
  });
});

router.delete("/data/:id", async (req, res) => {
  const book = await Book.findByIdAndRemove({ _id: req.params.id });
  res.send(book);
});

module.exports = router;
