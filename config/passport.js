var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Baller = require('../models/baller');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Baller.findOne({ googleId: profile.id }, function(err, baller) {
      if (err) return cb(err);
      if (baller) {
        return cb(null, baller);
      } else {
        // we have a new Baller via OAuth!
        var newBaller = new Baller({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          avatar: profile.photos[0].value
         
        });
        newBaller.save(function(err) {
          if (err) return cb(err);
          return cb(null, newBaller);
        });
      }
    });
  }
));

passport.serializeUser(function(baller, done){
    done(null, baller.id);
})

passport.deserializeUser(function(id, done){
    Baller.findById(id, function(err, baller){
        done(err, baller);
    })
})