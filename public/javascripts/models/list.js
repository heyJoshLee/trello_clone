App.List = Backbone.Model.extend({
  urlRoot: "/lists",
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