var express = require('express');
var router = express.Router();
var ctrl = require('./api.controller');

router.route('/')
     .get(ctrl.getPictures);
     
module.exports = router;