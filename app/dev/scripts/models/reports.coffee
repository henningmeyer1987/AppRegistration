Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class Reports extends BaseModel
	urlRoot: "http://localhost:8000/reports"
	
	validation:
		
		report_date:
			required: true
			format: /^([0-9]{1,2})\.([0-9]{1,2})\.([0-9]{4})$/
			message: "Berichtsdatum erforderlich"
		
		description:
			required: true
			minLength: 10
			maxLength: 255
			message: "Berichtbeschreibung mit min. 10 Zeichen erforderlich"

module.exports = Reports