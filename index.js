/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var app = express.createServer();
app.get('/', function(req, res) {
    res.send('Hello World!');
});
// Get port from heroku, otherwise use 3000.
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});