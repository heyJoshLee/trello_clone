App.AppView = Backbone.View.extend({
  el: $("main"),
  page: $("#page"),

  initialize: function() {
    this.collection = new App.Boards();
    console.log("collection is =")
    console.log(this.collection)
    new App.NavView();
  }

});