App.AppView = Backbone.View.extend({
  el: $("main"),
  page: $("#page"),

  initialize: function() {
    this.collection = new App.Boards();

    if (this.collection.length < 1) {
      this.collection.fetch().done(function(){
        new App.NavView();
      });
    } else {
      new App.NavView();
    }

  },

  render: function() {
  }


});