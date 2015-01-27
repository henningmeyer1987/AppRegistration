BaseView = require("./base.coffee")
navigation_template = require("../../templates/navigation.html")

class NavigationView extends BaseView
	el: "#js-top-region"
	show:()->
		@render(navigation_template)

module.exports = new NavigationView()