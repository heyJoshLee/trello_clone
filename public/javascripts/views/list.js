App.ListView = Backbone.View.extend({
  tagName: "li",
  className: "list_item",
  template: App.templates["lists_show"],

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log("list view model")
    console.log(this.model.toJSON())
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})