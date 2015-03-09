Backbone = require("backbone")
BaseModel = require("../base.coffee")
Backbone.Validator = require("backbone-validator")

class UpdateEmail extends BaseModel
	urlRoot: "http://localhost:2403/users"

	validation:
		oldemail:
			required: true
			message: "Name erforderlich"
			
		newemail:
			required: true
			message: "Passwort erforderlich"

module.exports = UpdateEmail