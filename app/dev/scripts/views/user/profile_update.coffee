Backbone = require("backbone")
BaseView = require("../base.coffee")
user = require("../../models/user.coffee")
ProfileUpdateModel = require("../../models/user/profile_update.coffee")
require("backbone-validator")
$ = require("jquery")
_ = require("underscore")
require("jquery-serialize-object")
moment= require("moment")
Helper = require("../../utils/helper.coffee")

class ProfileUpdateView extends BaseView
	model: {}
	el: "#js-content-region"
	template: "app/dev/templates/user/profile_update.html"
	events: 
		"submit form": "send"

	initialize: ->
		@model = new ProfileUpdateModel()
		@bindValidation(@model)

	show:()->
		@render(@template, user: user)
		console.log user
		Helper.initializeDatepicker($("#apprenticeshipstart"), true)
		Helper.initializeDatepicker($("#apprenticeshipend"), true)
		return @

	send:(event)->
		event.preventDefault()
		date_now = moment().format("DD.MM.YYYY")
		form_data = $('form').serializeObject()
		_.extend form_data, 
			"id" : user.get("uid")
			"datemodified": date_now
		@model.set(form_data)
		return if !@model.isValid()
		@model.save null,
			success:(model, response, options)->
				Backbone.history.navigate("home", trigger:true)
			error:(model, response, options)->
				console.log response			

module.exports = ProfileUpdateView