var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
    passport.use(new TwitterStrategy({
        consumerKey: '6KxVtKiFH68tfDtFzjeyztMTD',
        consumerSecret: 'RnV8sEGVemzUEV1FtcHbXunxOnqsUlMLZaMLGo0wvyv3QeGAyD',
        callbackUrl: '/auth/twitter/callback',
        passReqToCallback: true
    }, (req, token, tokenSecret, profile, done) => {
        var user = {};
        
        user.image = profile.photos? profile.photos[0].value : null;
        user.displayName = profile.displayName;
        user.username = profile.username;

        user.twitter = {};
        user.twitter.id = profile.id;
        user.twitter.token = token;

        done(null, user);
    }));
};