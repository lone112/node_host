var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function (req, res, next) {
    var hname = os.hostname();
    var vname = process.env.NAME;
    res.render('index', {title: 'Express ' + hname + '-' + vname});
});

module.exports = router;
