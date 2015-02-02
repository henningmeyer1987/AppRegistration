$ = require("jquery")
datetimepicker=require("datetimepicker")
moment = require("moment")
UserModel = require("../models/user.coffee")

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
		console.log UserModel


module.exports= new Helper()