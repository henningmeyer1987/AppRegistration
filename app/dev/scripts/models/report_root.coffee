Backbone = require("backbone")
BaseModel = require("./base.coffee")
$ = require("jquery")

class ReportRoot extends BaseModel
	urlRoot: "http://localhost:2403/reports/"

module.exports = ReportRoot
