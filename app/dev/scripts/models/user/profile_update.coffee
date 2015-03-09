Backbone = require("backbone")
BaseModel = require("../base.coffee")
Backbone.Validator = require("backbone-validator")

class UpdateProfile extends BaseModel
	urlRoot: "http://localhost:2403/users"

	validation:
		firstname:
			required: true
			message: "Vorname erforderlich"
			
		lastname:
			required: true
			message: "Nachname erforderlich"

		apprenticeshipstart:
			required: true
			message: "Ausbildungsstart erforderlich"

		apprenticeshipend:
			required: true
			message: "Ausbildungsende erforderlich"

module.exports = UpdateProfile