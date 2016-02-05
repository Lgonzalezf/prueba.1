/**
 * Created by lgonz_000 on 04/02/2016.
 */
var express = require('express');
var router = express.Router();

var results = "";
var fs = require('fs');
fs.readFile('json/services.json','utf8', function (err,data) {
    if(err){
        throw err;
    }else{
        results = JSON.parse(data);
    }
});

/* GET services page. */
router.get('/', function(req, res, next) {
    res.render('services', {
        title: 'services',
        services: results
    });
});

module.exports = router;
