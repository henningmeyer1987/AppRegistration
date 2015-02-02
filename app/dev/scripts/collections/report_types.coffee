BaseCollection = require ("./base.coffee")

class ReportTypes extends BaseCollection
	url: "http://localhost:2403/reporttypes"

module.exports =  new ReportTypes()
