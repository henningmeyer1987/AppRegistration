Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class User extends BaseModel
	
	validation:
		name:
			required: true
			blank: false
			minLength: 2
			maxLength: 20

module.exports = new User()