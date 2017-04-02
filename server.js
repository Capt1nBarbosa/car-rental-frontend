var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('workining');
});

app.listen(4000, function(){
    console.log("app listening on port 4000");
});
