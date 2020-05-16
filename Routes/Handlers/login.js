var app = require('express').Router();

let loginController = require('../../Controllers/login');

// controllers //

app.use('/checkLogin',loginController.checkLogin);

module.exports = app;