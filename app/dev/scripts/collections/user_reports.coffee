BaseCollection = require ("./base.coffee")

class UserReports extends BaseCollection
	url: "http://localhost:2403/reports"

module.exports =  new UserReports()
