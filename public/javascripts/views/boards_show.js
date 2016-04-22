App.BoardsShow = Backbone.View.extend({
  template: App.templates.boards_show,
  className: "show_board",

  events: {
    "click .delete": "remove"
    // Lists relation will not stay when I change title
    // "dblclick .board_title": "editBoardTitle",
    // "blur .edit_title": "saveTitle"
  },

  saveTitle: function(e) {
    $(e.target).parent(".title_container").removeClass("edit_title");
    var new_title = $(".edit_title").val();
    this.model.save({title: new_title});
  },

  editBoardTitle: function(e) {
    console.log("click")
    $(e.target).parent(".title_container").addClass("edit_title");
  },

  remove: function(e) {
    e.preventDefault();
    this.model.destroy().done(function() {
      // not sure why this isn't updating correctly
      app.router.navigate("users/" +"test", {trigger: true, replace: true})
    });
  },

  initialize: function() {
    this.collection = new App.Lists();
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function() {
    var self = this;
    this.collection.fetch({
      traditional: true,
      data: {
        board_title: self.model.get("title")
      }
    }).done(function(data) {
        self.$el.html(self.template(self.model.toJSON()));
        self.$el.find("#lists").append(new App.ListNew({board_title: self.model.get("title"), collection: self.collection}).$el);
        app.page.html(self.$el);

        _.each(self.collection.toArray(), function(list_item) {
          self.$el.find("#lists").append(new App.ListView({model: list_item}).$el);
        });
    });
    
    

  }
});