import express from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/login", (req, res) => {
  const user = {
    userName: req.body.userName,
    password: req.body.password
  };
  jwt.sign({ user }, "secretKey", (err, token) => {
    res.json({ token });
  });
});

export default router;
