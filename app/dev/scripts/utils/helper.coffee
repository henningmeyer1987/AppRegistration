$ = require("jquery")
datetimepicker=require("datetimepicker")
moment = require("moment")
UserModel = require("../models/user.coffee")

class Helper	
	initializeDatepicker: (element) ->
		element.datetimepicker(
			closeOnDateSelect: true,
			lang:'de',
			format:'d.m.Y',
			onShow: (ct) ->
				#@setOptions(
				#	maxDate: (if dateEnd then moment(dateEnd, "DD.MM.YYYY").format("YYYY/MM/DD") else false),
				#)
			timepicker:false
		).val(moment().format("DD.MM.YYYY"))

	logout:()->
		user = localStorage.getItem('user')
		if user?
			localStorage.removeItem('user')
		UserModel.clear()
		console.log UserModel


module.exports= new Helper()