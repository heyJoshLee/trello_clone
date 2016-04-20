App.AppView = Backbone.View.extend({
  el: $("main"),
  page: $("#page"),

  initialize: function() {
    this.collection = new App.Boards();
    new App.NavView();
  }

});