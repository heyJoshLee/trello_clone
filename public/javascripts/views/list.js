App.ListView = Backbone.View.extend({
  tagName: "li",
  className: "list_item",
  template: App.templates["lists_show"],

  events: {
    "dblclick .list_title": "editTitle",
    "dblclick .item": "editItem",
    "click .card_new": "openForm",
    "click .save_list": "addItem",
    "blur .list_title_edit": "updateTitle",
    "blur input" : "hideInput",
    "click .delete_list_item": "deleteListItem",
    "click .delete_list": "deleteList"
  },

  deleteList: function(e) {
    e.preventDefault();
    var want_to_delete = confirm("Are you sure you want to delete this list?");
    console.log(want_to_delete);
    if (want_to_delete) {
      this.model.destroy();
      this.remove();
    }
  },

  deleteListItem: function(e) {
    e.preventDefault();
    $(e.target).parents(".item_container").remove();
    this.saveList();
  },

  saveList: function() {
    var values = {};
    values["items"] = [];
    values["title"] = this.$el.find(".list_title_edit").val();
    _.each(this.$el.find("input:not(.list_title_edit)"), function(input) {
      values["items"].push($(input).val());
    });
    console.log(values); 
    this.model.save(values);
    console.log(this.model.toJSON());
  },

  updateTitle: function(e) {
   this.$el.removeClass("editing_title");
   this.saveList();
  },

  hideInput: function(e) {
    $(e.target).parents('.item_container').removeClass("item_editing")
    this.saveList();
  },

  editItem: function(e) {
    $(e.target).parent().addClass("item_editing")
  },

  editTitle: function(e) {
    this.$el.addClass("editing_title");
  },

  addItem: function() {
    var list_value = this.$el.find(".card_new").val();
    if(list_value == false ) {
      alert("List item can't be empty!")
      return;
    }
    this.model.get("items").push(list_value);
    this.$el.removeClass("adding_list_item");
    this.model.save();
  },

  openForm: function() {
    this.$el.addClass("adding_list_item");
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})