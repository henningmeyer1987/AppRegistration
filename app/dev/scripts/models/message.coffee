Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class Message extends BaseModel
	validation:
		contact_name:
			required: true
			minLength: 2
			maxLength: 20
			message: "Name erforderlich"
		contact_textarea:
			required: true
			minLength: 5
			maxLength: 100
			message: "Name erforderlich"

module.exports = new Message()