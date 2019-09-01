import express from "express";
import Blog from "../models/Blog";
import jwt from "jsonwebtoken";
const router = express.Router();

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.status(403);
  }
};

router.post("/post", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (err, auth) => {
    let newData = {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      date: req.body.date
    };
    if (err) {
      res.status(403);
    } else {
      Blog.create(newData, err => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ newData, auth });
        }
      });
    }
  });
});

router.put("/post/:id", async (req, res) => {
  const blog = await Blog.findById({ _id: req.params.id }, err);
  if (err) {
    throw err;
  } else {
    res.status(200).json(blog);
  }
});

router.delete("/post/:id", async (req, res) => {
  const blog = await Blog.findByIdAndRemove({ _id: req.params.id });
  res.send(blog);
});

export default router;
