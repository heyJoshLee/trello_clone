App.BoardsEdit = Backbone.View.extend({
  template: App.templates.boards_edit,
  
  events: {
    "click .save": "save",
  },

 save: function() {
    var values = {};
    _.each($(".form_boards_edit input"), function(input){
      values[input.name] = input.value;
    });

    values["body"] = $("#body_input_edit").val();

    if (values.tags === "") {
      values.tags = ["untagged"];
    } else {
      values.tags = values.tags.split(" ").map(function(el) {
        return el.replace(/[^a-zA-Z\d]/g, "-");
      });
    }

    console.log(values.body);
    this.model.set(values)

    var model = this.model

    this.model.save().done(function(doc) {
      console.log(doc)
      new App.BoardsShow({model: model});
    });
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var self = this;
    this.$el.html(this.template(this.model.toJSON()));
    app.page.html(this.$el);
  }
});