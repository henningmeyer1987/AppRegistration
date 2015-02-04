BaseView = require("./base.coffee")
Backbone = require("backbone")
UserModel = require("../models/user.coffee")
UserReportsCollection =  require ("../collections/user_reports.coffee")
Helper = require("../utils/helper.coffee")
$ = require("jquery")
require("jquery-serialize-object")


class DashboardView extends BaseView

	$(document).ready( ()->
		$('.report-edit').on "click", (event)->
			console.log event.target
		$('.report-delete').on "click", (event)->
			reportID = $(this).attr 'reportID'
			Helper.destroyReport(reportID)
			#Backbone.history.navigate("home", trigger:true)
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