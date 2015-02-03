Backbone = require("backbone")
BaseModel = require("./base.coffee")
$ = require("jquery")

class ReportID extends BaseModel
	urlRoot: "http://localhost:2403/reports/"
	constructor: (reportid) ->
		@reportid = reportid

	destroy_report:()->
		console.log "hat geklapt"
		$.ajax
			url: 'http://localhost:2403/reports/' + @reportid
			type: 'DELETE'
			success: (response) ->
				return

	change_report:()->
		console.log "erfolg"
		$.ajax
			url: 'http://localhost:2403/reports/' + @reportid
			type: 'PUT'
			success: (response) ->
				return


module.exports = ReportID