# myapp/api.py
from tastypie.resources import ModelResource
from report_types.models import report_types
from tastypie.authorization import Authorization


class ReportTypesResource(ModelResource):
	class Meta:
		queryset = report_types.objects.all()
		resource_name = 'report_types'
		authorization = Authorization()
