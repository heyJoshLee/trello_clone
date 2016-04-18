App.BoardNew = Backbone.View.extend({
  template: App.templates.boards_new,
  attributes: {
    id: "boards_new"
  },

  events: {
    "click #create_board": "create_board"
  },

  validate_form: function() {
    return !!$("#title_input").value
  },

  create_board: function() {
      var values = {};
      _.each($(".form_boards_new input"), function(input){
        values[input.name] = input.value;
      });

      values["body"] = $("#body_input").val();

      if (values.tags === "") {
        values.tags = ["untagged"];
      } else {
        values.tags = values.tags.split(" ").map(function(el) {
          el.replace(/[^a-zA-Z\d]/g, "-")
          console.log(el)
          console.log(el.toLowerCase())
          return el.toLowerCase();
        });
      }
      app.collection.create(values, {wait : true,    // waits for server to respond with 200 before adding newly created model to collection

        success : function(model){
          app.router.navigate("boards/" + model.get("slug"), {trigger: true, replace: true})
        }
      });

  },

  render: function() {
    this.$el.html(this.template());
    app.page.html(this.$el)
  },

  initialize: function() {
    this.render();
  }
})