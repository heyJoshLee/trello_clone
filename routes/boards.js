var express = require('express');
var router = express.Router();
var Board = require("../models/board.js");

var limit = 10;

router.post('/', function(req, res, next) {
  var board_values = req.body;
  var board = new Board(board_values);
    board.save(function(err, doc) {
    res.send(doc)
  });
});

router.get("/:id", function(req, res, next) {
  var id = req.params.id
  console.log(id)
  Board.findOne({_id: id}, function(err, doc) {
    console.log("board returned is:")
    console.log(doc)
    res.send(doc);
  });
});

router.put("/:id", function(req, res, next) {

  Board.update( { _id: req.params["id"] }, 
    {
      $set: {
        title: req.body["title"],
        image: req.body["image"],
        body: req.body["body"],
        tags: req.body["tags"]
      }
    }, function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("saved doc");
        console.log(doc)
        res.send(doc);
      }
  });
});

router.delete("/:id", function(req, res, next) {
  console.log("delete request")
  var id = req.params["id"];
  Board.remove( { _id: id }, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted");
      console.log(doc);
      res.send(doc);
    }
  })
});


router.get("/", function(req, res, next){
    console.log("fetch board!");
    var username = req.query.username; 
    console.log(username)

    Board.find({author: username}).exec(function(err, docs) {
      res.send(docs);
    });
});

module.exports = router;
