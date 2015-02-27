Backbone = require("backbone")
BaseView = require("./base.coffee")
UserModel = require("../models/user.coffee")
ReportUpdateModel = require("../models/reports.coffee")
ReportTypesCollection =  require ("../collections/report_types.coffee")
Helper = require("../utils/helper.coffee")
require("backbone-validator")
$ = require("jquery")
_ = require("underscore")
require("jquery-serialize-object")
moment= require("moment")


class ReportUpdateView extends BaseView
	model: {}
	el: "#js-content-region"
	template: "app/dev/templates/reports_update.html"
	report:{}
	events: 
		"submit form": "send"
			
	initialize: ->
		@model = new ReportUpdateModel()
		@bindValidation(@model)

	show: ->
		ReportTypesCollection.fetch
			success:(collection, response, options)=>
				console.log ReportTypesCollection.models
				@render(@template, report_types: ReportTypesCollection.models)
				Helper.initializeDatepicker($("#reportdate"))
			error:(collection, response, options)->
				console.log response

	send:(event)->
		event.preventDefault()
		date_now = moment().format("DD.MM.YYYY")
		form_data = $('form').serializeObject()
		_.extend form_data, 
			"usersid" : UserModel.get("uid")
			"datecreated" : date_now
			"datemodified": date_now
		@model.set(form_data)
		return if !@model.isValid()
		@model.save null,
			success:(model, response, options)->
				Backbone.history.navigate("home", trigger:true)
			error:(model, response, options)->
				console.log response	



module.exports = ReportUpdateView