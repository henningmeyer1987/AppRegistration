Backbone = require ("backbone")
SignupView = require ("./views/signup.coffee")
NavigationView = require ("./views/navigation.coffee")
HomeView = require ("./views/home.coffee")
ContactView = require ("./views/contact.coffee")

class AppRouter extends Backbone.Router
	routes:
		"": "home"
		"home": "home"
		"signup": "signup"
		"contact": "contact"

	initialize: ()->
		NavigationView.show()
		Backbone.history.start()

	home: ()->
		HomeView.show()
		console.log "home"

	signup: ()->
		SignupView.show()
		console.log "test"

	contact: ()->
		ContactView.show()
		console.log "contact info"


module.exports =  new AppRouter()

#SignupView.show()
#HomeView.show()
