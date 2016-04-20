App.Index = Backbone.View.extend({
  template: App.templates.index,

  initialize: function(username) {
    this.username = username
    this.render();
  },

  render: function() {
    var self = this;
    this.$el.html(this.template({username: this.username}));

    app.page.html(this.$el);
    app.page.find("#boards_list").append(new App.BoardNew().$el);

      app.collection.fetch({
        data: {username: this.username}
      }).done(function(collection) {

        _.each(collection, function(board) {
        app.page.find("#boards_list").append(new App.BoardPreview({model: new App.Board(board)}).$el);
        });
      })
    }  
});