# myapp/api.py
from tastypie.resources import ModelResource
from reports.models import reports


class ReportsResource(ModelResource):
	class Meta:
		queryset = reports.objects.all()
		resource_name = 'users'
