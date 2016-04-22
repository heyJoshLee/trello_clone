this["JST"] = this["JST"] || {};

this["JST"]["board_preview"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2><a href=\"#/boards/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"go_to_board\"> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " </a></h2>";
},"useData":true});

this["JST"]["boards_edit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>Editing: "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1><div class=\"form_boards_edit\"><label for=\"title_input_edit\">Title</label><input type=\"text\" name=\"title\" id=\"title_input_edit\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /><label for=\"image_input\">Image URL</label><input type=\"text\" name=\"image\" id=\"image_input_edit\" value=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" /><label for=\"body_edit\">Body</label><textarea type=\"text\" name=\"body\" id=\"body_input_edit\" >"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</textarea><label for=\"tags_input_edit\">Categories<br /><small>Enter all tags separated by spaces</small></label><input type=\"text\" name=\"tags\" id=\"tags_input_edit\" value=\""
    + alias4(((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data}) : helper)))
    + "\" /><a class=\"save\">Save Board</a></div>";
},"useData":true});

this["JST"]["boards_new"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"open_form\">Create new board</a><div class=\"new_board_inputs\"><input type=\"text\" name=\"title\" id=\"title_input\" /><a class=\"submit_board\">Create</a></div>";
},"useData":true});

this["JST"]["boards_show"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1> "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + " </h1><ul id=\"lists\"></ul><div class=\"edit_and_delete_buttons\"><a href=\"#\" class=\"edit\">Edit</a><a href=\"#\" class=\"delete\">Delete</a></div>";
},"useData":true});

this["JST"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" class=\"form_login\"><h1 class=\"launch_login\">Log in</h1><input for=\"username_input\" type=\"text\" name=\"username\" placeholder=\"username\"><input for=\"password_input\" type=\"password\" name=\"password\" placeholder=\"password\"><input type=\"submit\" value=\"Log in\" class=\"login_button\"></form><form action=\"\" class=\"form_register\"><h1 class=\"launch_register\">Register a new account</h1> <label for=\"username_input\">Username<input for=\"username_input\" type=\"text\" name=\"username\" id=\"username\"></label><label for=\"password_input\">Password<input for=\"password_input\" type=\"password\" name=\"password\" id=\"password\"></label><label for=\"password_confirm_input\">Confirm Password<input for=\"password_confirm_input\" type=\"password\" name=\"password2\" id=\"password2\"></label><a href=\"#\" id=\"registerAccount\"> Register </a></form>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1 class=\"user_header\">"
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "'s boards </h1><ul id=\"boards_list\"></ul>";
},"useData":true});

this["JST"]["lists_new"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class=\"open_form\">Add a new list</a><input type=\"text\" name=\"title\" id=\"title_input\" placeholder=\"Board Name\" /><input type=\"hidden\" name=\"board_title\" id=\"board_title\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.board_title || (depth0 != null ? depth0.board_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"board_title","hash":{},"data":data}) : helper)))
    + "\" /><a class=\"submit_list\">Save</a>";
},"useData":true});

this["JST"]["lists_show"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<ul class=\"item_container\"><li class=\"item\"> "
    + alias2(alias1(depth0, depth0))
    + " </li><li class=\"item_edit\"> <input value="
    + alias2(alias1(depth0, depth0))
    + " /> <a class=\"delete_list_item\" href=\"#\">X</a> </li></ul>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h3 class=\"list_title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3><input class=\"list_title_edit\" name=\"title_value\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /> <a class=\"delete_list\" href=\"#\"> X </a><ul class=\"items\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><textarea name=\"card\" class=\"card_new\" placeholder=\"Add A new card\"> </textarea><a class=\"save_list\"> Save </a>";
},"useData":true});

this["JST"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Please log in to continue</h1><form action=\"\" class=\"form_login\"><input for=\"username_input\" type=\"text\" name=\"username\" placeholder=\"username\"><input for=\"password_input\" type=\"password\" name=\"password\" placeholder=\"password\"><input type=\"submit\" value=\"Log in\" class=\"login_button\"></form>";
},"useData":true});

this["JST"]["nav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul><li><h1> <a href=\"/#\" id=\"main_logo\">Trello</a> </h1></li></ul>";
},"useData":true});

this["JST"]["register"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Register a new account</h1> <form action=\"\" class=\"form_register\"><label for=\"username_input\">Username<input for=\"username_input\" type=\"text\" name=\"username\" id=\"username\"></label><label for=\"password_input\">Password<input for=\"password_input\" type=\"password\" name=\"password\" id=\"password\"></label><label for=\"password_confirm_input\">Confirm Password<input for=\"password_confirm_input\" type=\"password\" name=\"password2\" id=\"password2\"></label><a href=\"#\" id=\"registerAccount\"> Register </a></form>";
},"useData":true});

this["JST"]["tags_index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\"/#tags/"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"tag_link\" data-tag=\""
    + alias2(alias1(depth0, depth0))
    + "\"> "
    + alias2(alias1(depth0, depth0))
    + " </a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});