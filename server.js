const express = require("express");
const router = express.Router();
const Book = require("./models/Books");

router.get("/", (req, res) => {
  res.send({ data: "1" });
});

//CRUD
router.put("/", (req, res) => {});

router.get("/data", (req, res) => {
  res.send({ message: [1, 2, 3] });
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

module.exports = router;
