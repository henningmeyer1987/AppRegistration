BaseView = require("./base.coffee")
SignupModel = require("../models/user.coffee")
Backbone = require("backbone")
require("backbone-validator")
signup_template = require("../../templates/signup.html")
$ = require("jquery")
require("jquery-serialize-object")

class SignupView extends BaseView
	el: "#js-content-region"
	events: 
		"submit form": (event)->
			event.preventDefault()
			form_data = $('form').serializeObject()
			SignupModel.set(form_data)
			return if !SignupModel.isValid()
	initialize: ->
		@bindValidation(SignupModel)
			
	show:()->
		@render(signup_template)

	onInvalidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".signup-rows").addClass("error")
		$("[name='" + attrName + "']").next().removeClass("hide").html(errors)


	onValidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".signup-rows").removeClass("error")
		$("[name='" + attrName + "']").next().addClass("hide").empty()

module.exports = new SignupView()