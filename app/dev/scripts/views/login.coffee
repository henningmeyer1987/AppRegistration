BaseView = require("./base.coffee")
LoginModel = require("../models/login.coffee")
Backbone = require("backbone")
require("backbone-validator")
login_template = require("../../templates/login.html")
$ = require("jquery")
require("jquery-serialize-object")

class LoginView extends BaseView
	model: {}
	el: "#js-content-region"
	events: 
		"submit form": (event)->
			event.preventDefault()
			form_data = $('form').serializeObject()
			@model.set(form_data)
			return if !@model.isValid()
			@model.save null,
				success:(model, response, options) =>
					@set_localstorage(model)
					window.location.reload()
				error:(model, response, options)->
					console.log response				

	initialize: ->
		@model = new LoginModel()
		@bindValidation(@model)

	show:()->
		@render(login_template)

	set_localstorage:(model)->
		user = 
			"username": model.get("username")
			"uid": model.get("uid")
		localStorage.setItem('user', JSON.stringify(user))

module.exports = LoginView