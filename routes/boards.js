var express = require('express');
var router = express.Router();
var Board = require("../models/board.js");

var limit = 10;

router.post('/', function(req, res, next) {
  var board = new Board(req.body);
    board.save(function(err, doc) {
    res.send(doc)
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

router.get("/:slug", function(req, res, next){
  var slug = req.params.slug ;
    Board.findOne({slug: slug}).sort({"created_at": "desc" }).exec(function(err, doc) {
      res.send(doc);
    });
});

router.get("/", function(req, res, next){

    Board.find().exec(function(err, docs) {
      res.send(docs);
    });
});

module.exports = router;
