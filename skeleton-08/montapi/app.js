var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apiVersion1 = require("./routes/api1");
var createError = require('http-errors');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./config/swagger.json');

var logger = require('./modules/logger');
var getLogmsg = require('./modules/logmsg');
var pkgjs = require('./package.json');

var app = express();

// define view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

// parse request body
app.use(bodyParser.json());

// show api docu
app.use('/service/monitoring/test/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// define routing
app.use(apiVersion1);

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