App.TagsIndex = Backbone.View.extend({
  template: App.templates.tags_index,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({tags: this.collection}));
    return this;
  }
});