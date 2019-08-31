const express = require("express");
const router = express.Router();
// import Blog from "./models/Blog";
const Blog = require("./models/Blog");

router.get("/", (req, res) => {
  res.send("hi");
});

router.get("/data", async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
});

module.exports = router;
