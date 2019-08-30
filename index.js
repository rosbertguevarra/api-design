const server = require("./server");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
app.disable("x-powered-by");

const db = mongoose.connection;

mongoose.connect("mongodb://localhost/users_test", { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", server);
app.use("/api/data", server);
app.use("/api/data/:id", server);
app.use("api/data/login", server);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to the database");
});

app.listen(3000, () => {
  console.log("server is on 3000");
});
