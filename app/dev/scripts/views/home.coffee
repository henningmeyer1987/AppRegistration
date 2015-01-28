BaseView = require("./base.coffee")
home_template = require("../../templates/home.html")

class HomeView extends BaseView
	el: "#js-content-region"
	show:()->
		@render(home_template)

module.exports = HomeView