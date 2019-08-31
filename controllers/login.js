const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// import jwt from "jsonwebtoken";

router.post("/login", (req, res) => {
  const user = {
    userName: req.body.userName,
    password: req.body.password
  };
  jwt.sign({ user }, "secretKey", (err, token) => {
    res.json({ token });
  });
});

// const verifyToken = (req, res, next) => {
//   const bearerHeader = req.headers["authorization"];

//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");

//     const bearerToken = bearer[1];

//     req.token = bearerToken;

//     next();
//   } else {
//     res.status(403);
//   }
// };

module.exports = router;
// module.exports = verifyToken;
