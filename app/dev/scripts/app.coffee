Backbone = require ("backbone")
_ = require ("underscore")
require("routefilter")
SignupView = require ("./views/signup.coffee")
NavigationView = require ("./views/navigation.coffee")
HomeView = require ("./views/home.coffee")
LoginView = require ("./views/login.coffee")

class AppRouter extends Backbone.Router
	current_view: {}
	routes:
		"": "home"
		"home": "home"
		"signup": "signup"
		"login": "login"

	before:(route) ->
		if _.isEmpty(@current_view) is false
			console.log "asdasdasd"
			@current_view.destroy(@current_view)
	initialize: ()->
		NavigationView.show()
		Backbone.history.start()

	home: () ->
		@current_view = new HomeView()
		@current_view.show()

	signup: () ->
		@current_view = new SignupView()
		@current_view.show()

	login: () ->
		@current_view = new LoginView()
		@current_view.show()

module.exports =  new AppRouter()