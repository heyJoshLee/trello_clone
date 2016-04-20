App.Router = Backbone.Router.extend({
  routes: {
    "boards/"         : "redirectToHome",
    "boards/new"      : "renderNewBoard", 
    "boards/:id"      : "showBoard",
    "users/:username" : "showUser",
    "login"           : "renderLogin",
    "register"        : "renderRegister",
    ""                : "renderHomeRoute",
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

  showBoard: function(id) {
    console.log("show board with board id" + id)
    var model = new App.Board({_id: id});
    model.fetch().done(function(Board) {
      new App.BoardsShow({model: model});
    });
  },

  showUser: function(username) {
    console.log("should show user!" + username);
    new App.Index(username);
  },

  renderHomeRoute: function() {
    new App.Home();
  }


})