var express = require('express');
var userSchema = require('../modules/schema');
var logger = require('../modules/logger');
var router = express.Router();

router.get('/', function (req, res, next) {
  userSchema.find()
  .sort( {lastname: "descending"} )
  .exec(function(err, users) {
    if (err) { return next(err); }
    logger.info("request for index page!")
    res.render("index", { title: "World's Best Singers", users: users });
  });
});

router.get("/:title", function (req, res) {
  res.render('index', { title: req.params.title });
});

module.exports = router;