BaseView = require("./base.coffee")
navigation_template = require("../../templates/navigation.html")
$ = require("jquery")
UserModel = require("../models/user.coffee")

class NavigationView extends BaseView
	el: "#js-top-region"
			
	show:()->
		console.log UserModel
		@render(navigation_template)

module.exports = new NavigationView()