from django.conf.urls import patterns, include, url
from django.contrib import admin
from users.ressources import UsersResource
from users.ressources.login import UsersLoginResource
from reports.ressources import ReportsResource
from report_types.ressources import ReportTypesResource

users_resource = UsersResource()
login_resource = UsersLoginResource()
reports_resource = ReportsResource()
report_types_resource = ReportTypesResource()

urlpatterns = patterns('',
	# Examples:
	# url(r'^$', 'bhg_django.views.home', name='home'),
	# url(r'^blog/', include('blog.urls')),

	url(r'^admin/', include(admin.site.urls)),
	url(r'^api/', include(users_resource.urls)),
	url(r'^api/', include(login_resource.urls)),
	url(r'^api/', include(reports_resource.urls)),
	url(r'^api/', include(report_types_resource.urls)),
)
