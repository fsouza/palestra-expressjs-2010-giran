var jade = require('jade');
var express = require('express');
var app = express.createServer();
var sys = require('sys');

app.get('/books', function (request, response) {
    var options = {
        locals: {
            books : ['Java for girls', 'Lord of the Rings']
        }
    }
    jade.renderFile(__dirname + '/templates/list.jade', options, function (err, html) {
        if (err) { throw err; };
        response.send(html);
    });
});

app.listen(3000);
