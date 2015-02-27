Backbone = require("backbone")
ReportsModel = require("./reports.coffee")
Backbone.Validator = require("backbone-validator")

class ReportUpdate extends ReportsModel
	urlRoot: "http://localhost:2403/reports"


module.exports = ReportUpdate