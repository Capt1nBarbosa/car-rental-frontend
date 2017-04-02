var logger = require('morgan');
var express = require('express');
var port = process.env.PORT || 4000;

//express instantiation
var app = express();

//middleware
app.use(logger('dev'));
app.use(express.static('public'));

//listen for connection on port
app.listen(port, function(){
  console.log(`app listening on port ${port}`);
});
