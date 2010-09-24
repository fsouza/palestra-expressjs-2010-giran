var express = require('express');
var app = express.createServer();

app.get('/', function (request, response) {
    response.send('Hello world!');        
});

app.listen(3000);
