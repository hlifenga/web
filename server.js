var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(request, response){
    response.send('hello world!');
});

app.listen(port,function(){
    console.log("Express app listening on port " + port);
    // hello
