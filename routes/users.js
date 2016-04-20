var express = require('express');
var router = express.Router();
var Board = require("../models/board.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hit users');
});

router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  console.log("looking for user" + username)
  Board.find({author: username}, function(err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log("Docs are")
      console.log(docs)
    }
  });
});

module.exports = router;
