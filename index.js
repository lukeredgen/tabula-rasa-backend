/**
 * Created by Luke on 13/08/2016.
 */
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    router = require('./router'),
    mongoose = require('mongoose'),
    config = require('./config/main');

// Database setup
mongoose.connect(config.database);

// Start the server
const server = app.listen(config.port);
console.log('Your server is listening on port ' + config.port + '.');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

router(app);