var express = require('express');
var router = express.Router();
var passport = require('passport');

router.route('/twitter/callback')
    .get(passport.authenticate('twitter', {
        successRedirect: '/',
        failure: '/'
    }));
    
router.route('/twitter')
      .get(passport.authenticate('twitter'));
      
module.exports = router;