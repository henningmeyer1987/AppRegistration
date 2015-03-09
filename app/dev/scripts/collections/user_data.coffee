BaseCollection = require ("./base.coffee")

class UserData extends BaseCollection
	url: "http://localhost:2403/users"

module.exports =  new UserData()
