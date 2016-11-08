'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('build' + '/public'));

app.get('/', function (req,res) {
    res.render('home');
});

app.listen(app.get('port'), function () {
    console.log("Node running on port", app.get('port'));
});
