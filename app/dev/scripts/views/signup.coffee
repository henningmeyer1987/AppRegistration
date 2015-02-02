BaseView = require("./base.coffee")
UserModel = require("../models/user.coffee")
Backbone = require("backbone")
require("backbone-validator")
$ = require("jquery")
_ = require("underscore")
require("jquery-serialize-object")
Helper = require("../utils/helper.coffee")
moment= require("moment")

class SignupView extends BaseView
	model: {}
	el: "#js-content-region"
	template: "app/dev/templates/signup.html"
	events: 
		"submit form": (event)->
			event.preventDefault()
			date_now = moment().format("DD.MM.YYYY")
			form_data = $('form').serializeObject()
			_.extend form_data, 
			"datecreated" : date_now
			"datemodified": date_now
			@model.set(form_data)
			return if !@model.isValid()
			@model.save null,
				success:(model, response, options)->
					Backbone.history.navigate("home", trigger:true)
				error:(model, response, options)->
					console.log response

	initialize: ->
		@model = UserModel
		@bindValidation(@model)
			
	show:()->
		@render(@template, {})
		Helper.initializeDatepicker($("#apprenticeshipstart"), true)
		Helper.initializeDatepicker($("#apprenticeshipend"), true)
		return @

module.exports = SignupView
