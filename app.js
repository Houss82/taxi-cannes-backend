const connectDB = require("./models/connection");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const cors = require("cors");
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3002",
      "https://www.cannestaxi.fr",
      "https://cannestaxi.fr",
    ],
    credentials: true,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

/**
 * Cessation d'activité : pas de connexion MongoDB au runtime public.
 * Les routes réservation renvoient 410 sans toucher à la base.
 * Les données historiques restent intactes dans MongoDB.
 * (connectDB conservé dans models/ pour restauration éventuelle)
 */
// connectDB();
module.exports = app;
