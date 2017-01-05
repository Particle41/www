'use strict';

const express = require('express');
const aws = require('aws-sdk');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('build'));

app.engine('html', require('ejs').renderFile);)

app.get('/', function(req, res) {
    res.sendfile('build/home.html');
});

app.listen(app.get('port'), function () {
    console.log("Node running on port", app.get('port'));
});

const S3_BUCKET = process.env.S3_BUCKET;
