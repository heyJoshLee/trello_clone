App.List = Backbone.Model.extend({
  urlRoot: "/lists",

  defaults: {
    items: ["item 1", "Item 2 thinfiasdopandoasndoandaondaon"]
  },

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