var express = require('express')
var engine = require("ejs-mate");
var path = require('path')
var app = express()
var ejs = require('ejs');
var http = require("http").Server(app);
var port = process.env.PORT || 3000;

app.engine("ejs", engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));                  

app.use(express.static(path.join(__dirname,'/Public'))) 

app.get('/', function(req,res) {
    res.render('login');
})

http.listen(port,()=>{console.log("Running on port "+port);});