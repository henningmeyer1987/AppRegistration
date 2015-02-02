Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class Reports extends BaseModel
	urlRoot: "http://localhost:2403/reports"

	validation:
		reportDate:
			required: true
			minLength: 10
			maxLength: 10
			message: "Berichtsdatum erforderlich"
		
		description:
			required: true
			minLength: 10
			maxLength: 100
			message: "Berichtbeschreibung mit min. 10 Zeichen erforderlich"

module.exports = Reports