const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

const jwt = require("jsonwebtoken");

router.put("/data/:id", async (req, res) => {
  const blog = await Blog.findById({ _id: req.params.id }, err);
  if (err) {
    throw err;
  } else {
    res.status(200).json(blog);
  }
});

router.post("/data", (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403);
    } else {
      let newData = {
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        date: req.body.date
      };
      Blog.create(newData, err => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            newData,
            authData
          });
        }
      });
    }
  });
});

router.delete("/data/:id", async (req, res) => {
  const blog = await Blog.findByIdAndRemove({ _id: req.params.id });
  res.send(blog);
});

module.exports = router;
