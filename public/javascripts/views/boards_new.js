App.BoardNew = Backbone.View.extend({
  template: App.templates.boards_new,
  attributes: {
    tagName: "li",
    class: "form_boards_new"
  },

  events: {
    "click .open_form": "openForm",
    "click .submit_board": "createBoard"
  },

  createBoard: function() {
      var title = this.$el.find("#title_input").val();
      app.collection.create({title: title, author: "josh"}, 
        {
          wait : true,    // waits for server to respond with 200 before adding newly created model to collection
          success : function(model){
            app.router.navigate("boards/" + model.get("_id"), {trigger: true, replace: true})
          }
        });
  },

  validate_form: function() {
    return !!$("#title_input").value
  },

  openForm: function() {
      this.$el.addClass("editing");
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  initialize: function() {
    this.render();
  }
})