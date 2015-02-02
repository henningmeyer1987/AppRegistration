$ = require("jquery")
Backbone = require("backbone")
Backbone.$ = $
nunjucks = require("nunjucks")
_ = require("underscore")

class BaseView extends Backbone.View
	
	render:(template, context)->
		$(@el).html(nunjucks.render(template, context))

	destroy: (view) ->
		if _.isEmpty(view.subView) is false
			view.subView.undelegateEvents()
			$(view.subView.el).empty()
		view.undelegateEvents()
		$(view.el).empty()	

	onInvalidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".row").addClass("error")
		$("[name='" + attrName + "']").next().removeClass("hide").html(errors)

	onValidField: (attrName, attrValue, errors, model) ->
		$("[name='" + attrName + "']").closest(".row").removeClass("error")
		$("[name='" + attrName + "']").next().addClass("hide").empty()

module.exports = BaseView