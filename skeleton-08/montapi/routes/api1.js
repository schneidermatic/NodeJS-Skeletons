var express = require('express');
var router = express.Router();
var getLogMsg= require('../modules/logmsg');
var logger = require('../modules/logger');
var pkgjs = require('../package.json');

// Get project info.
router.get('/service/monitoring/test/api/info', function (req, res) {
  res.json(pkgjs);
});

// Generate auto log message.
router.get('/service/monitoring/test/api/v1/logmsg', function (req, res) {
  var customMsg = {};
  logger.info(getLogMsg(customMsg));
  res.json({"message-type": "auto", "status": "ok"});
});


// Process custom log message.
router.post('/service/monitoring/test/api/v1/logmsg', function (req, res) {
  logger.info(getLogMsg(req.body));
  res.json({"message-type": "custom", "status": "ok"});
});

module.exports = router;