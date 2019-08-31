const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
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
