BaseView = require("./base.coffee")
contact_template = require("../../templates/contact.html")

class ContactView extends BaseView
	el: "#js-content-region"
			
	show:()->
		@render(contact_template)

module.exports = new ContactView()