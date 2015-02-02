BaseView = require("./base.coffee")

class DashboardView extends BaseView
	el: "#js-content-region"
	template: "app/dev/templates/dashboard.html"
	
	show:()->
		@render(@template, {})
		return @

module.exports = DashboardView