BaseView = require("./base.coffee")
signup_template = require("../../templates/signup.html")

class SignupView extends BaseView
	el: "#app" 

	show:()->
		@render(signup_template)
		@rerender(signup_template)
module.exports = new SignupView()