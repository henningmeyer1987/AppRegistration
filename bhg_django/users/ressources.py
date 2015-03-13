# myapp/api.py
from tastypie.resources import ModelResource
from users.models import users


class UsersResource(ModelResource):
	class Meta:
		queryset = users.objects.all()
		resource_name = 'users'
