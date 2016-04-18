App.BoardPreview = Backbone.View.extend({
  template: App.templates.board_preview,
  tagName: "li",
  className: "board_preview",

  render: function() {
    var id = this.model.get("_id");
    this.$el.attr("id", "board" + id);
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  initialize: function() {
    this.render();
  }
})