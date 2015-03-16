# myapp/api.py
from tastypie.resources import ModelResource
from reports.models import reports
from tastypie.authorization import Authorization


class ReportsResource(ModelResource):
	class Meta:
		queryset = reports.objects.all()
		resource_name = 'reports'
		authorization = Authorization()
