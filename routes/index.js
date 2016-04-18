var express = require('express');
var router = express.Router();
var Board = require("../models/board.js");

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Trello Clone' });
});

router.post("/register", function(req, res, next) {
  var username = req.body.username,
      password = req.body.password,
      password2 = req.body.password2;

    passport.authenticate("local-register", {
      successRedirect: "/",
      failureRedirect: "/register",
      failureFlash: true,
      successFlash: true
    })(req, res, next);
  
});

router.get("/logout", function(req, res, next) {
  req.logout();
  console.log("success", "You have successfully logged out");
});

router.post("/login", function(req, res, next) {
  var username = req.body.username,
      password = req.body.password;

     passport.authenticate("local-login", {
       successRedirect: "/",
       failureRedirect: "/login"
    })(req, res, next);
});



module.exports = router;
