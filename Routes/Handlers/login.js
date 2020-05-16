let express = require("express");
var app = require("express").Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

/* Controllers */
let Controller = require("../../Controllers");

app.get("/logutUser", function (req, res) {
    req.session.isLogin = 0;
    req.session.destroy();
    res.render("login");
});

app.post("/checkLogin", Controller.user.checkLogin);

module.exports = app;