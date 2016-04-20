App.BoardsShow = Backbone.View.extend({
  template: App.templates.boards_show,
  className: "show_board",

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
    this.collection = new App.Lists();
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
          console.log("list is")
          console.log(list_item)
          self.$el.append(new App.ListView({model: new App.List(list_item)}).$el);
        });
    });
    
    

  }
});