App.NavView = Backbone.View.extend({
  template: App.templates.nav,
  el: $("nav"),


  render: function() {
    this.$el.html(this.template({}));
  },

  initialize: function() {
    this.render();
  }
});