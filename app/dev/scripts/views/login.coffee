BaseView = require("./base.coffee")
LoginModel = require("../models/login.coffee")
UserModel = require("../models/user.coffee")
Backbone = require("backbone")
require("backbone-validator")
$ = require("jquery")
require("jquery-serialize-object")


class LoginView extends BaseView
	model: {}
	el: "#js-login-region"
	template: "app/dev/templates/login.html"
	events: 
		"submit form": (event)->
			event.preventDefault()
			form_data = $('form').serializeObject()
			@model.set(form_data)
			return if !@model.isValid()
			@model.save null,
				success:(model, response, options) =>
					@set_localstorage(model)
					Backbone.history.navigate("home", trigger:true)
				error:(model, response, options)->
					console.log response				

	initialize: ->
		@model = new LoginModel()
		@bindValidation(@model)

	show:()->
		@render(@template, {})
		return @

	set_localstorage:(model)->
		user = 
			"username": model.get("username")
			"uid": model.get("uid")
		UserModel.set(user)
		localStorage.setItem('user', JSON.stringify(user))

module.exports = LoginView