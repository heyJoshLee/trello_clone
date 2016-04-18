this["JST"] = this["JST"] || {};

this["JST"]["board_preview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<small class=\"tag_preview\"><a href=\"#/tags/"
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</a></small>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2><a href=\"#/boards/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\" class=\"go_to_board\"> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " </a></h2><a href=\"#/boards/"
    + alias4(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\" class=\"go_to_board\"><img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" onError=\"this.src='images/not_found.jpg'\" /></a><div class=\"tag_preview_container\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
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
    return "<h1>New Board</h1><div class=\"form_boards_new\"><label for=\"title_input\">Title</label><input type=\"text\" name=\"title\" id=\"title_input\" /><label for=\"image_input\">Image URL</label><input type=\"url\" name=\"image\" id=\"image_input\" /><label for=\"body\">Body</label><textarea type=\"text\" name=\"body\" id=\"body_input\" /></textarea><label for=\"tags_input\">Categories<br /><small>Enter all tags separated by a space</small></label><input type=\"text\" name=\"tags\" id=\"tags_input\" /><a id=\"create_board\">Create Board</a></div>";
},"useData":true});

this["JST"]["boards_show"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<small class=\"tag_preview\"><a href=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</a></small>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"show_board\"><h1> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " </h1><img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" onError=\"this.src='images/not_found.jpg'\" class=\"board_image\" /><p class=\"post_body\"> "
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + " </p><div class=\"tag_preview_container\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"edit_and_delete_buttons\"><a href=\"#\" class=\"edit\">Edit</a><a href=\"#\" class=\"delete\">Delete</a></div></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul id=\"boards_list\"></ul>";
},"useData":true});

this["JST"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Please log in to continue</h1><form action=\"\" class=\"form_login\"><input for=\"username_input\" type=\"text\" name=\"username\" placeholder=\"username\"><input for=\"password_input\" type=\"password\" name=\"password\" placeholder=\"password\"><input type=\"submit\" value=\"Log in\" class=\"login_button\"></form>";
},"useData":true});

this["JST"]["nav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul><li><h1> <a href=\"/#\" id=\"main_logo\">Foodie</a> </h1></li><li><a href=\"/#tags\" id=\"tags_path\">Tags</a></li><li><a href=\"/#boards/new\" id=\"new_board\">New Board</a></li></ul>";
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