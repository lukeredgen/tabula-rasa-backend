/**
 * Created by Luke on 13/08/2016.
 */
"use strict"

const jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
    User = require('../models/user'),
    config = require('../config/main');

// Generate JWT
function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10000 // in seconds
    });
}

function setUserInfo(request){
    let getUserInfo = {
        _id: request._id,
        firstName: request.profile.firstName,
        lastName: request.profile.lastName,
        email: request.email,
        role: request.role
    };

    return getUserInfo;
}

//=======================================
// Login Route
//=======================================
exports.login = function(req, res, next){
    let userInfo = setUserInfo(req.user);

    res.status(200).json({
            token: 'JWT ' + generateToken(userInfo),
        user: userInfo
    });
}

//=======================================
// Registration Route
//=======================================
exports.register = function(req, res, next){
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }

    if (!firsName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
    }

    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, function(err, existingUser) {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'That email address is already in use.' });
        }

        let user = new User({
            email: email,
            password: password,
            profile: { firstName: firstName, lastName: lastName }
        });

        user.save(function (err,user) {
            if (err) { return next(err); }

            let userInfo = setUserInfo(user);

            res.status(201).json({
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo
            });
        });
    });
}

//=================================
// Authorization middleware
//=================================

// Role authorization check
exports.roleAuthorization = function(role){
    return function(req, res, next){
        const user = req.user;

        User.findById(user._id, function(err,foundUser){
            if (err) {
                res.status(422).json({ error: 'No user was found.' });
                return next(err);
            }

            if (foundUser.role == role) {
                return next();
            }

            res.status(401).json({ error: 'You are not authorised to view this content.' });
            return next('Unauthorised');
        })
    }
}

//=================================
// Forgot Password route
//=================================

exports.forgotPassword = function(req, res, next){
    const email = req.body.email;

    User.findOne({ email: email }, function(err, existingUser) {
        //if user is not found, return error
        if (err || existingUser == null) {
            res.status(422).json({ error: 'Your request could not be processed as entered. Please try again.' });
            return next(err);
        }

        crypto.randomBytes(48, function(err, buffer){
            const resetToken = buffer.toString('hex');
            if (err) { return next(err); }

            existingUser.resetPasswordToken = resetToken;
            existingUser.resetPasswordExpires = Date.now() + 3600000; //1 hour

            existingUser.save(function (err) {
                //If error in saving token, return it
                if (err) { return next(err); }

                const message = {
                    subject: 'Reset Password',
                    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset-password/' + resetToken + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                }
                
            })
        })
    })
}