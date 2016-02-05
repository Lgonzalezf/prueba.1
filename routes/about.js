/**
 * Created by lgonz_000 on 04/02/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'about' });
});

module.exports = router;
