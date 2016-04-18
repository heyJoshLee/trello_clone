App.Index = Backbone.View.extend({
  template: App.templates.index,

  initialize: function() {
    this.render();
  },

  render: function() {
    var self = this;
    this.$el.html(this.template);

    app.page.html(this.$el);
    app.page.find("#boards_list").append(new App.BoardNew().$el);

      app.collection.fetch().done(function(collection) {

        _.each(collection, function(board) {
        app.page.find("#boards_list").append(new App.BoardPreview({model: new App.Board(board)}).$el);
        });
      })
    }  
});