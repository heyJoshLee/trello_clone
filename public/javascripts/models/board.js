Backbone.Model.prototype.idAttribute = "_id";
App.Board = Backbone.Model.extend({
  urlRoot: "/boards",
  initialize: function() {
    this.on("invalid", function() {
      alert("Please enter a title");
    });
  },

  validate: function(attrs){
    if (!attrs.title) {
      return "Need a title"
    }
  }

});