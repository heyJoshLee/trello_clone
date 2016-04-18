App.TagsShow = Backbone.View.extend({
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
    var params = {skip: this.skip, tag: this.tag}
    app.collection.fetch( {data: params, remove: false }).
      done(function(collection) {
        self.skip += self.skip_increment;

        _.each(collection, function(board) {
            self.$el.find("#boards_list").append(new App.BoardPreview({model: new App.Board(board)}).$el);
          });
        self.loading = false;
      });
  },

  initialize: function(args) {
    this.tag = args["tag"]
    this.skip_increment = 5;
    this.skip = this.skip_increment;
    _.bindAll(this, 'scrollWhere');
    $(window).scroll(this.scrollWhere);
    this.render();

  },

  render: function() {
    var self = this;
    this.$el.html(this.template);
    app.page.html(this.$el);

    app.collection.fetch({
      data: { tag: this.tag },
      processData: true
    })

    _.each(app.collection.toArray(), function(board) {
      app.page.find("#boards_list").append(new App.BoardPreview({model: board}).$el);
    });
  }
});