$ = require("jquery")
Backbone = require("backbone")
datetimepicker=require("datetimepicker")
moment = require("moment")
UserModel = require("../models/user.coffee")
ReportRoot = require("../models/report_root.coffee")

class Helper	
	initializeDatepicker: (element, has_future_date) ->
		element.datetimepicker(
			scrollInput:false, 
			closeOnDateSelect: true,
			lang:'de',
			format:'d.m.Y',
			onShow: (ct) ->
				if !has_future_date
					@setOptions(
						maxDate: moment().format("DD.MM.YYYY")
					)
			timepicker:false
		).val(moment().format("DD.MM.YYYY"))

	logout:()->
		user = localStorage.getItem('user')
		if user?
			localStorage.removeItem('user')
		UserModel.clear()
		
	deleteReport:(reportID)->
		ReportIDModel = new ReportRoot()
		ReportIDModel.set id:reportID
		ReportIDModel.destroy
			success:(model, response, options)=>
				console.log response
			error:(model, response, options)->
				console.log response
		Backbone.history.navigate("home", trigger:true)

module.exports= new Helper()