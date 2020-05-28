var app = require('express').Router();

app.use('/user', require('./Handlers/user.js'));
app.use('/admin', require('./Handlers/admin.js'));
app.use('/vendor', require('./Handlers/vendor.js'));

module.exports = app;