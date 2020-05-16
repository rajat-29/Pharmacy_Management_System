var app = require('express').Router();
                 
app.use('/login',require('./Handlers/login.js'));
app.use('/admin',require('./Handlers/admin.js'));

module.exports = app;