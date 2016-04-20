App.ListView = Backbone.View.extend({
  tag: "li",
  className: "list",
  template: App.templates["lists_show"],

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})