Backbone = require("backbone")
BaseView = require("../base.coffee")
UserModel = require("../../models/user.coffee")
PasswordUpdateModel = require("../../models/user/password_update.coffee")
require("backbone-validator")
$ = require("jquery")
_ = require("underscore")
require("jquery-serialize-object")
moment= require("moment")


class PasswordUpdateView extends BaseView
	model: {}
	el: "#js-content-region"
	template: "app/dev/templates/user/password_update.html"
	events: 
		"submit form": "send"

	initialize: ->
		@model = new PasswordUpdateModel()
		@bindValidation(@model)

	show:()->
		@render(@template, {})
		return @

	send:(event)->
		console.log "Die Scheiße funktioniert!"
		event.preventDefault()			

module.exports = PasswordUpdateView