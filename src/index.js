const server = require("../server");
const signup = require("../controllers/signup");
const login = require("../controllers/login");
const crud = require("../controllers/crud");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
app.disable("x-powered-by");

const db = mongoose.connection;

mongoose.connect("mongodb://localhost/users_test", { useNewUrlParser: true });

app.use(express.static(path.resolve(__dirname + "./dist/index.html")));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/", server);
app.use("/api", server);
app.use("/api/data", crud);
app.use("/api/data/:id", crud);
app.use("/api/data/", login);
app.use("/api/data/signup", signup);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to the database");
});

app.listen(3000, () => {
  console.log("server is on 3000");
});
