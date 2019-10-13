var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.render('index',{ title: 'Express' })
});

router.get("/:title", function (req, res) {
  res.render('index', { title: req.params.title });
});

module.exports = router;