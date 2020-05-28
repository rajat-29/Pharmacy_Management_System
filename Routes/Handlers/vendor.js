var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

/* Controllers */
var Controllers = require("../../Controllers");

/* Middleware */
var Middleware = require("../../middlewares/middleware");

app.get("/addStock", Middleware.checkSession, Middleware.checkVendor, Controllers.Medicine.addStock);

app.post("/addStock", Middleware.checkSession, Middleware.checkVendor, Controllers.stock.addStock);

module.exports = app;