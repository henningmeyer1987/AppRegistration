BaseCollection = require ("./base.coffee")

class ReportTypes extends BaseCollection
	url: "http://localhost:8000/report_types/"

module.exports =  new ReportTypes()
