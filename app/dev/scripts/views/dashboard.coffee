BaseView = require("./base.coffee")
UserModel = require("../models/user.coffee")
ReportModel = require("../models/report_id.coffee")
UserReportsCollection =  require ("../collections/user_reports.coffee")
$ = require("jquery")
require("jquery-serialize-object")


class DashboardView extends BaseView

	$(document).ready( ()->
		$('.report-edit').on "click", (event)->
			console.log event.target
		$('.report-delete').click ->
			#console.log event.target
			ReportIDModel = new ReportModel("5d1e2bb93dfd18a5").destroy_report()
			console.log ReportIDModel
	)	
	el: "#js-content-region"
	template: "app/dev/templates/dashboard.html"

	show:()->
		UserReportsCollection.fetch
			success:(collection, response, options)=>
				@render(@template, reports: UserReportsCollection.models)
			error:(collection, response, options)->
				console.log response
		return @
	

module.exports = DashboardView