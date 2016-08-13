/**
 * Created by Luke on 13/08/2016.
 */
const passport = require('passport'),
    User = require('../models/user'),
    config = require('./main'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    LocalStrategy = require('passport-local');

const localOptions = {
    usernameField: 'email'
}

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    
})