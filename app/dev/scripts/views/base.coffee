$ = require("jquery")
Backbone = require("backbone")
Backbone.$ = $

class BaseView extends Backbone.View
	
	render:(template)->
		$(@el).html(template)

	destroy: (view) ->
		view.undelegateEvents()
		$(view.el).empty()	

	onInvalidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".row").addClass("error")
		$("[name='" + attrName + "']").next().removeClass("hide").html(errors)

	onValidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".row").removeClass("error")
		$("[name='" + attrName + "']").next().addClass("hide").empty()

module.exports = BaseView