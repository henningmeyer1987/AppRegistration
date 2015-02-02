BaseView = require("./base.coffee")
$ = require("jquery")
UserModel = require("../models/user.coffee")


class NavigationView extends BaseView
	el: "#js-top-region"
	template: "app/dev/templates/navigation.html"			
	
	initialize:()->
		@listenTo(UserModel, "change:uid", @show)

	show:()->
		@render(@template, user:UserModel)
		$(document).foundation('topbar', 'reflow');
		return @

module.exports = new NavigationView()