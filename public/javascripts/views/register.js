App.Register = Backbone.View.extend({
  template: App.templates.register,

  events: {
    "click #registerAccount": "registerAccount" 
  },

  registerAccount: function(e) {
    e.preventDefault();
    var values = {};
    _.each($("input"), function(input) {
      values[input.name] = input.value
    });

    console.log("values are");
    console.log(values);


    $.ajax({
      url: "/register",
      type: 'POST',
      data: {param1: 'value1'},
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
  },

  attributes: {
    id: "register"
  },

  render: function() {
    this.$el.html(this.template());
    app.page.html(this.$el)
  },

  initialize: function() {
    this.render();
  }
})