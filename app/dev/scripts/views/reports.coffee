Backbone = require("backbone")
BaseView = require("./base.coffee")
ReportsModel = require("../models/reports.coffee")
ReportTypesCollection =  require ("../collections/report_types.coffee")
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
		test = new Date()
		console.log test
		@model = new ReportsModel()
		@bindValidation(@model)

	show:()->
		console.log ReportTypesCollection
		ReportTypesCollection.fetch
			success:(collection, response, options)=>
				@render(@template, report_types: ReportTypesCollection.models)
			error:(collection, response, options)->
				console.log response

		return @

module.exports = ReportsView