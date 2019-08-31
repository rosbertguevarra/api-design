const express = require("express");
const router = express.Router();
// const Blog = require("./models/Blog");
import Blog from "./models/Blog";
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/data", async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
});

module.exports = router;
