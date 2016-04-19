App.Home = Backbone.View.extend({
  template: App.templates.home,
  id: "forms_container",

  events: {
    "click .launch_login": "renderLoginForm",
    "click .launch_register": "renderRegisterForm",
  },

  renderLoginForm: function(e) {
    console.log("clicked")
    this.$el.find(".form_login").toggleClass("form_filling_out");
  },

  renderRegisterForm: function(e) {
    console.log("clicked")
    this.$el.find(".form_register").toggleClass("form_filling_out");
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    app.page.html(this.$el);
  }
})