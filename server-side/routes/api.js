var express = require('express');
var router = express.Router();
var ctrl = require('./api.controller');

router.route('/')
    .get(ctrl.getPictures)
    .post(ctrl.addPicture);
router.route('/:id')
    .put(ctrl.updatePicture)
    .delete(ctrl.removePicture);

module.exports = router;