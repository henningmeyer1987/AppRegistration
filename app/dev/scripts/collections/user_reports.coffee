BaseCollection = require ("./base.coffee")

class UserReports extends BaseCollection
	url: "http://localhost:8000/reports"

module.exports =  new UserReports()
