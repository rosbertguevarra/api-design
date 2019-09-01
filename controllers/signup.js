import express from "express";
const router = express.Router();
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

router.post("/signup", (req, res) => {
  let newUser = {
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  User.create(newUser, err => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(newUser);
    }
  });
});

module.exports = router;
