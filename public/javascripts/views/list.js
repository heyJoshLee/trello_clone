App.ListView = Backbone.View.extend({
  tagName: "li",
  className: "list_item",
  template: App.templates["lists_show"],

  events: {
    "click .card_new": "openForm",
    "click .save_list": "updateItem"
  },

  updateItem: function() {
    console.log("clicked")
    this.model.get("items").push(this.$el.find(".card_new").val())
    console.log(this.model.get("items"));
    this.model.save();
    this.$el.removeClass("editing");


  },

  openForm: function() {
    this.$el.addClass("editing");
  },

  closeForm: function() {
    this.$el.removeClass("editing");
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})