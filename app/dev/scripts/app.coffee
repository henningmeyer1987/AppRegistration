Backbone = require ("backbone")
_ = require ("underscore")
require("routefilter")
SignupView = require ("./views/signup.coffee")
NavigationView = require ("./views/navigation.coffee")
HomeView = require ("./views/home.coffee")
LoginView = require ("./views/login.coffee")
ReportsView = require ("./views/reports.coffee")
$ = require("jquery")
window.jQuery = $
window.Modernizr = require('browsernizr2')
foundation = require("foundation") #exports window.Foundation
UserModel = require("./models/user.coffee")

$ ->
	$(document).foundation()

class AppRouter extends Backbone.Router
	current_view: {}
	routes:
		"": "home"
		"home": "home"
		"signup": "signup"
		"login": "login"
		"reports": "reports"

	before:(route) ->
		if _.isEmpty(@current_view) is false
			@current_view.destroy(@current_view)

	initialize: ()->
		user = localStorage.getItem('user')
		if user?
			UserModel.set(JSON.parse(user))
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

	reports: () ->
		@current_view = new ReportsView()
		@current_view.show()

module.exports =  new AppRouter()