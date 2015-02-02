$ = require("jquery")
UserModel = require("../models/user.coffee")

class Helper
	logout:()->
		user = localStorage.getItem('user')
		if user?
			localStorage.removeItem('user')
		UserModel.clear()
		console.log UserModel


module.exports= new Helper()