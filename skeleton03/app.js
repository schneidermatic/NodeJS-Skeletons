var express = require('express');
var path = require('path');
var router = require("./routes/routes");
var logger = require("morgan");
var createError = require('http-errors');

var app = express();

// define view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

// define logger
app.use(logger('combined'));

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