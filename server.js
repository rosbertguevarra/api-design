const express = require("express");
const router = express.Router();

// const log = (req, res, next) => {
//   console.log("logging");
//   req.mydata = "hello";
//   next();
// };

router.get("/", (req, res) => {
  res.send({ data: "1" });
});

router.put("/data", (req, res) => {});

router.get("/data", (req, res) => {
  res.send({ message: [1, 2, 3] });
});

router.post("/data", (req, res) => {
  console.log(req.body);
  res.send({ ok: true });
});

module.exports = router;
