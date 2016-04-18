App.Login = Backbone.View.extend({
  template: App.templates.login,
  attributes: {
    id: "login"
  },

  render: function() {
    this.$el.html(this.template());
    app.page.html(this.$el)
  },

  initialize: function() {
    this.render();
  }
})