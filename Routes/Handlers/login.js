let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../Public')));

let loginController = require('../../Controllers/login');

app.get('/logutUser', function(req,res) {
    req.session.isLogin = 0;
    req.session.destroy();
    res.render('login');
})

// controllers //

app.use('/checkLogin',loginController.checkLogin);

module.exports = app;