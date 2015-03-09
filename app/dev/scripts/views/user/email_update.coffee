Backbone = require("backbone")
BaseView = require("./base.coffee")
UserModel = require("../models/user.coffee")
EmailUpdateModel = require("../models/user/email_update.coffee")
require("backbone-validator")
$ = require("jquery")
_ = require("underscore")
require("jquery-serialize-object")
moment= require("moment")


class EmailUpdateView extends BaseView
	model: {}
	el: "#js-content-region"
	template: "app/dev/templates/user/email_update.html"
	events: 
		"submit form": "send"

	initialize: ->
		@model = new EmailUpdateModel()
		@bindValidation(@model)

	show:()->
		@render(@template, {})
		return @

	send:(event)->
		console.log "dreckmist"
		event.preventDefault()			

module.exports = EmailUpdateView