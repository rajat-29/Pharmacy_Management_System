let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../Public')));

app.get("/dashboard", function (req, res) {
    res.render("dashboard");
});

module.exports = app;