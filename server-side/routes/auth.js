var express = require('express');
var router = express.Router();
var passport = require('passport');
var _ = require('lodash');

router.route('/twitter/callback')
    .get(passport.authenticate('twitter', {
        successRedirect: '/',
        failure: '/'
    }));

router.route('/twitter')
    .get(passport.authenticate('twitter'));

router.route('/user')
    .get((req, res) => {
        if (req.user) {
            console.log(req.user);
            res.json(_.assign(req.user, {
                authenticated: true
            }));
        }
        else {
            res.json({
                authenticated: false
            });
        }
    });

router.route('/logout')
    .get((req, res) => {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
