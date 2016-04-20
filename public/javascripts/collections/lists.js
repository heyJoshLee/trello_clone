App.Lists = Backbone.Collection.extend({
  model : App.List,
  url: "http://localhost:3000/lists"
});