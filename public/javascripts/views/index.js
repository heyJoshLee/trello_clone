App.Index = Backbone.View.extend({
  template: App.templates.index,

  loading: false,

  scrollWhere: function() {
    var position = window.pageYOffset / $(window).height();
    if (position > 0.60 && this.loading === false) {
      console.log("Load more!")
      this.showMore();
    }
  },

  showMore: function() {
    this.loading = true;
    var self = this;
    app.collection.fetch( {data: {skip: self.skip}, remove: false }).
      done(function(collection) {
        console.log(collection);
        self.skip += self.skip_increment;

        _.each(collection, function(board) {
            self.$el.find("#boards_list").append(new App.BoardPreview({model: new App.Board(board)}).$el);
          });
        self.loading = false;
      });
  },

  initialize: function(tag) {
    this.skip_increment = 5;
    this.skip = this.skip_increment;

    _.bindAll(this, 'scrollWhere');
    $(window).scroll(this.scrollWhere);
    this.render(tag);

  },

  render: function(tag) {
    var self = this;
    this.$el.html(this.template);
    app.page.html(this.$el);

    if (tag === undefined) {
      app.collection.fetch().done(function(){
          _.each(app.collection.toArray(), function(board) {
          app.page.find("#boards_list").append(new App.BoardPreview({model: board}).$el);
          });
      });
    } else {
      app.collection.fetch({
        data: {
          tag: tag
        }
      }).done(function(collection) {
        _.each(collection.toArray(), function(board) {
        app.page.find("#boards_list").append(new App.BoardPreview({model: board}).$el);
        });
      })
    } 
  }
});