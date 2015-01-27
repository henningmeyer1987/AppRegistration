$ = require("jquery")
Backbone = require("backbone")
Backbone.$ = $

class BaseView extends Backbone.View
	render:(template)->
		$(@el).html(template)

	onInvalidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".error-rows").addClass("error")
		$("[name='" + attrName + "']").next().removeClass("hide").html(errors)

	onValidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".error-rows").removeClass("error")
		$("[name='" + attrName + "']").next().addClass("hide").empty()
		
module.exports = BaseView