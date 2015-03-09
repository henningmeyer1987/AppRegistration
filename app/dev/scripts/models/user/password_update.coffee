Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class UpdatePassword extends BaseModel
	urlRoot: "http://localhost:2403/users"

	validation:
		oldpassword:
			required: true
			message: "Name erforderlich"
			
		newpassword:
			required: true
			message: "Passwort erforderlich"

		newpassword2:
			required: true
			message: "Passwort erforderlich"

module.exports = UpdatePassword