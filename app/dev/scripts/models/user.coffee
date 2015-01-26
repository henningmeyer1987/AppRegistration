Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class User extends BaseModel
	localStorage:new Backbone.LocalStorage('User')
	
	validation:
		name:
			required: true
			blank: false
			minLength: 2
			maxLength: 20


	initialize:()->
		@set "id", localStorage.getItem("User")
		@set "name", localStorage.getItem("User")
		console.log Backbone.Validator.validate
			name: @name, @validation



	defaults:
		id: null
		name:null
module.exports = new User()