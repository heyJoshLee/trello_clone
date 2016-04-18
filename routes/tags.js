var express = require('express');
var router = express.Router();
var Board = require("../models/board.js");

router.get("/", function(req, res, next){
  Board.distinct("tags", function(err, doc){
    res.send(doc);
  })
});

router.get("/:tag_name", function(req, res, next) {
  var tag = req.params["tag_name"];
  Board.find({tags: { $in: [tag]} }, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
})

module.exports = router;
