var express = require('express');
var path = require('path');

var bodyParser = require("body-parser");
var logger = require('morgan');
var createError = require('http-errors');
var router = require('./routes/routes');
var db = require('./modules/database');
var User = require ('./modules/schema');

// setup express app
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs");

// setup database schema
//db.setSchema();

var users = [
    {   
        "userid": "001",
        "firstname": "Miachel",
        "lastname": "Jackson"
    },
    {
        "userid": "002",       
        "firstname": "Tom",
        "lastname": "Jones"
    },
    {
        "userid": "003",  
        "firstname": "Freddy",
        "lastname": "Mercury"
    }
]

function insert(users) {
    for(var count in users) {
       var instance = new User({ userid: users[count].userid, firstname: users[count].firstname, lastname: users[count].lastname })
       instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
        });
    }
}

insert(users);

// define routing
app.use(router);

app.use(function(req, res, next) {
    next(createError(404));
});
  
// define error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;