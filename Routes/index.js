var app = require('express').Router();
                 
app.use('/admin',require('./Handlers/admin.js'));

module.exports = app;