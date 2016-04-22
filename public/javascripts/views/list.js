App.ListView = Backbone.View.extend({
  tagName: "li",
  className: "list_item",
  template: App.templates["lists_show"],

  events: {
    "dblclick .list_title": "editTitle",
    "dblclick .item": "editItem",
    "click .card_new": "openForm",
    "click .save_list": "addItem",
    "blur .list_title_edit": "hideUpdateTitle",
    "blur input" : "hideInput"
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

  hideUpdateTitle: function(e) {
   $(e.target).hide();
   this.$el.find(".list_title").show();
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
    $(e.target).hide();
    this.$el.find(".list_title_edit").show();
  },

  addItem: function() {
    this.model.get("items").push(this.$el.find(".card_new").val());
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