const express = require("express");
const router = express.Router();
const Blog = require("./models/Blog");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

router.get("/data", async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
});
router.put("/data/:id", async (req, res) => {
  const blog = await Blog.findById({ _id: req.params.id }, err);
  if (err) {
    throw err;
  } else {
    res.status(200).json(blog);
  }
});

router.post("/data", (req, res) => {
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
      res.status(200).json(newData);
    }
  });
});

router.post("/signup", async (req, res) => {
  let newUser = {
    firstName: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  Blog.create(newUser, err => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(newUser);
    }
  });
});

router.delete("/data/:id", async (req, res) => {
  const blog = await Blog.findByIdAndRemove({ _id: req.params.id });
  res.send(blog);
});

module.exports = router;
