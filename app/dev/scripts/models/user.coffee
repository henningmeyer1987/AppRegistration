Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class User extends BaseModel
	urlRoot: () ->
		return "http://localhost:8000/api/users/"	

	validation:

		username:
			required: true
			format: "email"
			message: "Email erforderlich"

		firstname:
			required: true
			minLength: 2
			maxLength: 20
			message: "Vorname erforderlich"

		lastname:
			required: true
			minLength: 2
			maxLength: 20
			message: "Nachname erforderlich"
		
		password:
			required: true
			minLength: 8
			maxLength: 30
			message: "Passwort min. 8 Zeichen"

		password_confirmation:
			fn: (value)->
				if value.length < 8
					return "Passwort min. 8 Zeichen"
				else if @get("password") isnt value
					return "Passwort stimmt nicht überein"				
				else
					return true



module.exports = new User()