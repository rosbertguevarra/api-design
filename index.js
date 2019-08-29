const server = require("./server");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", server);
app.use("/api/data", server);
app.listen(3000, () => {
  console.log("server is on 3000");
});
