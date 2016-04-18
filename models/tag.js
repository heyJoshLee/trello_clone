var mongoose = require('mongoose');

// User Schema
var tagSchema = mongoose.Schema({
  name: {
    type: String
  }
});

var Tag = module.exports = mongoose.model('Tag', userSchema);
