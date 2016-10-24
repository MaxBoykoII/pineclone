var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
    passport.use(new TwitterStrategy({
        consumerKey: '',
        consumerSecret: '',
        callbackUrl: '',
        passReqToCallback: true
    }, (req, token, tokenSecret, profile, done) => {
        var user = {};

        user.image = profile._json.image.url;
        user.displayName = profile.displayName;

        user.twitter = {};
        user.twitter.id = profile.id;
        user.twitter.token = token;

        done(null, user);
    }));
};