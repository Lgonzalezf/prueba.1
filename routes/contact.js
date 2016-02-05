/**
 * Created by lgonz_000 on 04/02/2016.
 */
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'contact' });
});
router.post('/send', function(req, res, next) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lgonzalez1725@gmail.com',
            pass: 'Noria2015Google'
        }
    });

    var mailOptions = {
        from: 'Luis Gonzalez 👥 <lgonzalez1725@gmail.com>', // sender address
        to: 'u43464686@continental.edu.pe', // list of receivers
        subject: 'Web site Submission', // plaintext body
        text: 'you got a submisiion with the following details.. Name:'+req.body.name + 'Email:'+req.body.email +
                'Message:'+req.body.text,
        html: '<p>you got a submision with the following details.. </p> <ul><li>Name:'+req.body.name + '</li><li>Email:'+req.body.email +
                '</li><li>Message:'+ req.body.text +'</li></ul>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
            res.redirect('/');
        }
        console.log('Message sent: ' + info.response);
        res.redirect('/');
    });

});

module.exports = router;
