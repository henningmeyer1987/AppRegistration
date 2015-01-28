Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class Login extends BaseModel
	urlRoot: "http://localhost:2403/users/login"

	validation:
		username:
			required: true
			message: "Name erforderlich"
			
		password:
			required: true
			message: "Passwort erforderlich"

module.exports = Login