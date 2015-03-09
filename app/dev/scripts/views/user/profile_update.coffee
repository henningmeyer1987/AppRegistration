Backbone = require("backbone")
BaseView = require("../base.coffee")
UserModel = require("../../models/user.coffee")
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
		@render(@template, {})
		Helper.initializeDatepicker($("#apprenticeshipstart"), true)
		Helper.initializeDatepicker($("#apprenticeshipend"), true)
		return @

	send:(event)->

		console.log "Oberaffenkackmist"
		event.preventDefault()			

module.exports = ProfileUpdateView