var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hit users');
});

router.get('/:username', function(req, res, next) {
  
  res.send('get boards for ' + req.params.username);
});

module.exports = router;
