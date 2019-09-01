import express from "express";
import Blog from "./models/Blog";
const router = express.Router();

router.get("/post", async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
});

module.exports = router;
