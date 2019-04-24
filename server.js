const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser')

const app = express();

const port = 3000;

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log('Magic is happening on port ' + port + '!');
});