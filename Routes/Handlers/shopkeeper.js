var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

/* Controllers */
var Controllers = require("../../Controllers");

/* Middleware */
var Middleware = require("../../middlewares/middleware");

app.get("/dashboard", Middleware.checkSession, Controllers.shopitems.dashboard);

module.exports = app;