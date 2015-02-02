BaseView = require("./base.coffee")
ReportsModel = require("../models/reports.coffee")
Backbone = require("backbone")
require("backbone-validator")
reports_template = require("../../templates/reports.html")
$ = require("jquery")
require("jquery-serialize-object")

class ReportsView extends BaseView
	model: {}
	el: "#js-content-region"
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
		@render(reports_template)

module.exports = ReportsView