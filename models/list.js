var mongoose = require('mongoose');

// List Schema
var listSchema = mongoose.Schema({
  title: {
    type: String
  },
  board_title: {
    type: String
  },
  items: [String],
  
  created_at: {
    type: Date,
    default: Date.now
  }
});

var List = module.exports = mongoose.model('List', listSchema);

