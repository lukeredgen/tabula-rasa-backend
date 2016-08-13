/**
 * Created by Luke on 13/08/2016.
 */
const config = require('./main');
const mailgun = require('mailgun-js')({ apiKey: config.mailgun_priv_key, domain: config.mailgun_domain });

exports.sendEmail = function(recepient, message) {
    const data = {
        from: 'Your Site <info@arby-soft.com>',
        to: recepient,
        subject: message.subject,
        text: message.text
    };

    mailgun.messages().send(data, function(error, body){

    });
}

exports.contactForm = function(sender, message){
    const data = {
        from: sender,
        to: 'you@arby-soft.com',
        subject: message.subject,
        text: message.text
    };

    mailgun.messages().send(data, function(error, body){

    })
}

