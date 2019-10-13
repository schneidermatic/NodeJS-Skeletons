var express = require('express');
var passport = require('passport');
var connectEnsureLogin = require('connect-ensure-login');
var router = express.Router();
var title = "Github Passport Example";

router.get('/',function (req, res) {
  res.render('index', { title: title });
});

router.get('/login',
  passport.authenticate('github'));

router.get('/logoff',function (req, res) {
    res.render('logoff', { title: title });
});

router.get('/logout', function (req, res) {
  req.session.destroy((err) => {
    if(err) return next(err)
    req.logout()
    res.redirect('/logoff');
  })
});

router.get('/credentials', 
    connectEnsureLogin.ensureLoggedIn(),
    function (req, res) {
        res.render('credentials', { 
                   title: 'Credentials for the REST-API',
                   accessToken: req.app.get('accessToken'), 
                   cookie: req.cookies['connect.sid'], 
                   example: "curl --cookie 'connect.sid=" + req.cookies['connect.sid'] + "' -H 'Authorization: Bearer " + req.app.get('accessToken') + "' http://" + req.get('host') + '/api/v1/timestamp'
                 });
});

router.get('/api/v1/timestamp', connectEnsureLogin.ensureLoggedIn(),
  function (req, res) {
    res.json({'timestamp': new Date()})
});

router.get('/unauthorized', function (req, res) {
    res.json({ message: 'unauthorized' })
});

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/unauthorized' }),
  function (req, res) { 
    res.redirect('/credentials');
});

module.exports = router;