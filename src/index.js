import server from "../server";
import signup from "../controllers/signup";
import login from "../controllers/login";
import crud from "../controllers/crud";
import express from "express";
const app = express();
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";

app.disable("x-powered-by");

const db = mongoose.connection;

mongoose.connect("mongodb://localhost/users_test", { useNewUrlParser: true });

app.use(express.static(path.resolve(__dirname + "./dist/index.html")));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/", server);
app.use("/api", crud);
app.use("/api/post/:id", crud);
app.use("/api", login);
app.use("/api", signup);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to the database");
});

app.listen(3000, () => {
  console.log("server is on 3000");
});
