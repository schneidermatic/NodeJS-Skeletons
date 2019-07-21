var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var cors = require('cors')
var createError = require('http-errors');
var routes = require('./routes/api1');
var api1 = require('./routes/api1');
var db = require('./modules/database');
var Todo = require ('./modules/schema');
var logger = require('./modules/logger');

// setup express app
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs");

// setup database schema
var todos = [
    {   
        "name": "Team Meeting",
        "time": Date.now()
    },
    {
        "name": "Project Planning",
        "time": Date.now() 
    },
    {
        "name": "Learning Vue.js",
        "time": Date.now()
    }
]

function insert(todos) {
    for(var count in todos) {
       var instance = new Todo({ name: todos[count].name, time: todos[count].time })
       instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
        });
    }
}

insert(todos);

logger.info("app is starting ...")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

// define routing
app.use("/",routes);
app.use("/v1",api1);

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