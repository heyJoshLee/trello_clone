var express = require('express');
var router = express.Router();
var List = require("../models/list.js");


router.get("/", function(req, res, next) {
  var board_title = req.query["board_title"];

  List.find({board_title: board_title}, function(err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log("sending docs")
      console.log(docs)
      res.send(docs)
    }
  })
})

router.get("/:board_name", function(req, res, next){
    var board_name = req.params["board_name"];
    console.log("Looking for lists under")
    console.log(board_name);

    List.find({board_name: board_name }).exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("sending docs")
        console.log(docs)
        res.send(docs);
      }
    });
});

router.post('/', function(req, res, next) {
  console.log("post new  list")
  var list = new List(req.body);
  list.save(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc)
    }
  })
});

// router.get("/:board_title", function(req, res, next) {
//   var board_title = req.params["board_title"]
//   console.log("Lookg foir lists under")
//   console.log(board_title)
//   List.find({board_title: board_title}, function(err, doc) {
//     console.log("List returned is:")
//     console.log(doc)
//     res.send(doc);
//   });
// });

router.put("/:id", function(req, res, next) {
  List.update( { _id: req.params["id"] }, 
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
  List.remove( { _id: id }, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted");
      console.log(doc);
      res.send(doc);
    }
  })
});



module.exports = router;
