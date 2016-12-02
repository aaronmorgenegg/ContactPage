var express = require('express');
var ejs = require('ejs');
var php = require('php');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', function(req, res){
  res.render('contact');
});

app.listen(3000, function(){
  console.log("The server is running on localhost:3000")
})
