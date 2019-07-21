var express = require('express');
var todoSchema = require('../modules/schema');
var logger = require('../modules/logger');
var router = express.Router();

router.get('/', function (req, res, next) {
  todoSchema.find()
  .sort( {lastname: "descending"} )
  .exec(function(err, todos) {
    if (err) { return next(err); }
    logger.info("request for index page!")
    res.render("index", { title: "Todo List", todos: todos });
  });
});

module.exports = router;