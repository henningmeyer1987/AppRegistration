BaseView = require("./base.coffee")
ContactModel = require("../models/message.coffee")
Backbone = require("backbone")
require("backbone-validator")
contact_template = require("../../templates/contact.html")
$ = require("jquery")
require("jquery-serialize-object")

class ContactView extends BaseView
	el: "#js-content-region"
	events: 
		"submit form": (event)->
			event.preventDefault()
			form_data = $('form').serializeObject()
			ContactModel.set(form_data)
			#return if !ContactModel.isValid()

	initialize: ->
		@bindValidation(ContactModel)

	show:()->
		@render(contact_template)

module.exports = new ContactView()