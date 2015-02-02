BaseView = require("./base.coffee")
ReportsModel = require("../models/reports.coffee")
Backbone = require("backbone")
require("backbone-validator")
$ = require("jquery")
require("jquery-serialize-object")

class ReportsView extends BaseView
	model: {}
	el: "#js-content-region"
	template: "app/dev/templates/reports.html"
	events: 
		"submit form": (event)->
			event.preventDefault()
			form_data = $('form').serializeObject()
			@model.set(form_data)
			return if !@model.isValid()
			@model.save null,
				success:(model, response, options)->
					Backbone.history.navigate("home", trigger:true)
				error:(model, response, options)->
					console.log response				

	initialize: ->
		@model = new ReportsModel()
		@bindValidation(@model)

	show:()->
		@render(@template, {})
		return @

module.exports = ReportsView