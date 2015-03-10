Backbone = require("backbone")
BaseModel = require("./base.coffee")
Backbone.Validator = require("backbone-validator")

class UserUpdate extends BaseModel
	urlRoot: "http://localhost:2403/users/<4810ebbc5b340856>"

module.exports = UserUpdate()