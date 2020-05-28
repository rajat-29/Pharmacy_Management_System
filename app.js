var express = require("express");
var session = require("express-session");
var mongoStore = require("connect-mongo")(session);
var bodyParser = require("body-parser");
var engine = require("ejs-mate");
var path = require("path");
var app = express();
var morgan = require("morgan")
var mongoose = require("mongoose")
var http = require("http").Server(app);
var port = process.env.PORT || 3000;

/* ENV */
require("dotenv").config();

/* DB */
require("./config/db");

app.use(morgan("dev"));

var db = mongoose.connection;

/* Session */
app.use(
    session({
        secret: "abcUCAChitkara",
        resave: true,
        saveUninitialized: true,
        store: new mongoStore({
            mongooseConnection: db,
        }),
    })
);

app.use(express.static(path.join(__dirname, "/Public")));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

/* Routes */
app.use('/', require('./Routes/'));

/* Login Page */
app.get("/", function (req, res) {
    res.render("login");
});

http.listen(port, () => {
    console.log("Running on port " + port);
});