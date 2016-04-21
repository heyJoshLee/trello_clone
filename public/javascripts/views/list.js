App.ListView = Backbone.View.extend({
  tagName: "li",
  className: "list_item",
  template: App.templates["lists_show"],

  events: {
    "dblclick .list_title": "updateTitle",
    "dblclick .item": "editItem",
    "click .card_new": "openForm",
    "click .save_list": "addItem",
    "blur .list_title_edit": "hideUpdateTitle"
  },

  editItem: function(e) {
    console.log("should show")
    $(e.target).next().toggle()
    // $(e.target).hide();
    // console.log($(e.target).next())
  },

  updateTitle: function(e) {
    $(e.target).hide();
    this.$el.find(".list_title_edit").show();
  },

  updateCompleteListItem: function() {
    var item_values = this.$el.find(".item")
    console.log(item_values)

  },

  hideUpdateTitle: function(e) {
   $(e.target).hide();
   this.$el.find(".list_title").show();
   this.updateCompleteListItem();

  },

  addItem: function() {
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