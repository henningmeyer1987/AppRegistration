BaseView = require("./base.coffee")
Backbone = require("backbone")
ReportsModel = require("../models/reports.coffee")
UserModel = require("../models/user.coffee")
UserReportsCollection =  require ("../collections/user_reports.coffee")
Helper = require("../utils/helper.coffee")
$ = require("jquery")
require("jquery-serialize-object")


class DashboardView extends BaseView

	$(document).ready( ()->
		$('.report-edit').on "click", (event)->
			event.preventDefault()
			reportID = $(this).attr 'reportID'
			Backbone.history.navigate("report_update", trigger:true)

		$('.report-delete').on "click", (event)->
			event.preventDefault()
			reportID = $(this).attr 'reportID'
			Helper.deleteReport(reportID)
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