BaseView = require("./base.coffee")
LoginView = require ("./login.coffee")

class HomeView extends BaseView
	el: "#js-content-region"
	template: "app/dev/templates/home.html"
	subView: {}
	show:()->
		@render(@template, {})
		@subView = new LoginView().show()
		return @

module.exports = HomeView