App.BoardsShow = Backbone.View.extend({
  template: App.templates.boards_show,

  events: {
    "click .delete": "remove",
    "click .edit": "edit"
  },

  remove: function(e) {
    e.preventDefault();
    this.model.destroy().done(function() {
      window.history.back()
    });
  },

  edit: function(e) {
    e.preventDefault();
    console.log("show edit")
    new App.BoardsEdit({model: this.model});
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var self = this;
    this.$el.html(this.template(this.model.toJSON()));
    app.page.html(this.$el);
  }
});