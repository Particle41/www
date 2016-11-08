'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('build'));

app.get('/', function(req, res) {
    res.sendfile('build/home.html');
});
// app.get('/', function (req,res) {
//     res.render('build/home.html');
// });

app.listen(app.get('port'), function () {
    console.log("Node running on port", app.get('port'));
});
