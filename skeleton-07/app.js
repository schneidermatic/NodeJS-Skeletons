require('dotenv').config();

var express = require('express');
var expressSession = require('express-session');
var path = require('path');
var passport = require('passport');
var Strategy = require('passport-github').Strategy;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('./routes/router.js');

var app = express();

// ----------------------------------------
// DEFINE VIEW ENGINE
// ----------------------------------------

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

// ----------------------------------------
// DEFINE PASSPORT VIA GITHUB STRATEGY
// ----------------------------------------

passport.use(new Strategy({
    clientID: process.env['GITHUB_CLIENT_ID'],
    clientSecret: process.env['GITHUB_CLIENT_SECRET'],
    callbackURL: process.env['GITHUB_CALLBACK_URL']
  },
  function(accessToken, refreshToken, profile, cb) {
    app.set('accessToken', accessToken);
    return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

// ----------------------------------------
// DEFINE MIDDLEWARE
// ----------------------------------------

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'octocat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// ----------------------------------------
// DEFINE ROUTING
// ----------------------------------------

app.use(router);

// ----------------------------------------
// DEFINE ERROR HANDLER
// ----------------------------------------

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;