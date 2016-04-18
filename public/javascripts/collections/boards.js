App.Boards = Backbone.Collection.extend({
  model : App.Board,
  url: "http://localhost:3000/boards"
});