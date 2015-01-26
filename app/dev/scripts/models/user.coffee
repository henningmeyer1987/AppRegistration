Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class User extends BaseModel
	
	validation:
		name:
			required: true
			minLength: 2
			maxLength: 20
			message: "Name erforderlich"
		
		password:
			required: true
			minLength: 8
			maxLength: 30
			message: "Passwort erforderlich"

		email:
			required: true
			format: "email"
			message: "Email erforderlich"

module.exports = new User()