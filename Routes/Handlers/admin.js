let express = require('express');
var app = require('express').Router();
var bodyParser = require("body-parser");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

/* Controllers */
var Controllers = require("../../Controllers");

app.use(bodyParser.json());

app.get("/dashboard", function (req, res) {
    res.render("dashboard");
});

app.get("/profile", Controllers.userbilling.getProfileDetails);

module.exports = app;