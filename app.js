'use strict';

const express = require('express');
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;
require('dotenv').config();

const app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static('build'));

app.get('/', function(req, res) {
    res.sendfile('build/home.html');
});

app.engine('html', require('ejs').renderFile);

app.listen(app.get('port'), function() {
    console.log("Node running on port", app.get('port'));
});
