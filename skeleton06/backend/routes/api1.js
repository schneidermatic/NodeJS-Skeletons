var express = require('express');
var todoSchema = require('../modules/schema');
var logger = require('../modules/logger');
var router = express.Router();

router.route('/todos')
  .get((req, res) => {
    todoSchema.find()
    .sort( {lastname: "descending"} )
    .exec(function(err, todos) {
      if (err) { return next(err); }
      logger.info("request for index page!")
      res.json({ todos: todos });
    });
  })
  .post((req, res) => {
    logger.info("==> request body" + JSON.stringify(req.body));
    var todo = new todoSchema(req.body);
    todo.save().then( todo => {
      res.status(200).json({'message': 'Todo successfully added '});
    })
    .catch(err => {
      res.status(400).send("Error when saving to database");
    });
  });


module.exports = router;