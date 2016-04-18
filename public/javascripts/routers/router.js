App.Router = Backbone.Router.extend({
  routes: {
    "tags"          : "renderTagsIndex",
    "tags/:tag"     : "goToTagPage",
    "boards/"       : "redirectToHome",
    "boards/new"    : "renderNewBoard", 
    "boards/:slug"  : "showBoard",
    "login"         : "renderLogin",
    "register"      : "renderRegister",
    ""              : "renderIndexRoute",
  },

  renderLogin: function() {
    new App.Login();
  },

  renderRegister: function() {
    new App.Register();
  },

  renderNewBoard: function() {
    new App.BoardNew();
  },

  redirectToHome: function() {
    app.router.navigate("/");
    this.renderIndexRoute();
  },

  showBoard: function(slug) {
    var model = new App.Board({_id: slug});
    model.fetch().done(function(Board) {
      new App.BoardsShow({model: model});
    });
  },

  goToTagPage: function(tag) {
    app.collection.fetch({
      traditional: true,
      data: {tag: tag}
    }).done(function(data){
      new App.TagsShow({collection: data, tag: tag })
    });
  },

  renderTagsIndex: function() {
    $.ajax({
      url: '/tags',
    })
    .done(function(data) {
      app.page.html(new App.TagsIndex({
        collection: data
      }).$el );
    })
    app.collection.fetch();
  },

  renderIndexRoute: function() {
    new App.Index();
  }


})