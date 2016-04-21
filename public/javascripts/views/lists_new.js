App.ListNew = Backbone.View.extend({
  tagName: "li",
  className: "lists_new",
  template: App.templates["lists_new"],

  events: {
    "click .open_form": "openForm",
    "click .submit_list": "createList"
  },

  createList: function() {
    var title = this.$el.find("#title_input").val(),
        board_title = this.$el.find("#board_title").val()
        self = this;
        this.collection.create({
      title: title, 
      board_title: board_title
    }, {
      success: function(data) {
        app.page.find("#lists").append(new App.ListView({ model: data }).$el);
        self.$el.removeClass("editing");
        self.$el.find("#title_input").val("");
      }
    });
  },

  openForm: function() {
    this.$el.addClass("editing");
  },

  initialize: function() {
    this.board_title = arguments[0]["board_title"];
    this.render();
  },

  render: function() {
    this.$el.html(this.template({board_title: this.board_title}));
    return this;
  }
});