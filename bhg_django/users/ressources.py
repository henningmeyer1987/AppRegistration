# myapp/api.py
from tastypie.resources import ModelResource
from users.models import users
from tastypie.authorization import Authorization


class UsersResource(ModelResource):
	class Meta:
		queryset = users.objects.all()
		resource_name = 'users'
		authorization = Authorization()
