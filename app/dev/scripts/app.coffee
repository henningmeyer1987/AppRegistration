$ = require("jquery")
window.jQuery = $
Backbone = require ("backbone")
_ = require ("underscore")
require("routefilter")
Helper = require("./utils/helper.coffee")
templates = require("../templates/templates.js")
window.Modernizr = require('browsernizr2')
foundation = require("foundation") #exports window.Foundation
UserModel = require("./models/user.coffee")
SignupView = require ("./views/signup.coffee")
NavigationView = require ("./views/navigation.coffee")
HomeView = require ("./views/home.coffee")
ReportsView = require ("./views/reports.coffee")
DashboardView = require ("./views/dashboard.coffee")
ReportUpdateView = require ("./views/report_update.coffee")

$ ->
	$(document).foundation()

class AppRouter extends Backbone.Router
	current_view: {}
	routes:
		"": "home"
		"home": "home"
		"signup": "signup"
		"logout": "logout"
		"reports": "reports"
		"report_update": "report_update"

	before:(route) ->
		if _.isEmpty(@current_view) is false
			@current_view.destroy(@current_view)

	initialize: ()->
		user = localStorage.getItem('user')
		if user?
			UserModel.set(JSON.parse(user))
		else
			NavigationView.show()
		Backbone.history.start()

	home: () ->
		if UserModel.get("uid")?
			@current_view = new DashboardView().show()
		else
			@current_view = new HomeView().show()

	signup: () ->
		@current_view = new SignupView().show()

	logout: ()->
		Helper.logout()
		@current_view = new HomeView().show()		

	reports: () ->
		@current_view = new ReportsView().show()

	report_update:() ->
		@current_view = new ReportUpdateView().show()

module.exports =  new AppRouter()