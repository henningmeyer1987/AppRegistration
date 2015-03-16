# myapp/api.py
from tastypie.resources import ModelResource
from users.models import users
from tastypie.authorization import Authorization


class UsersLoginResource(ModelResource):
	class Meta:
		queryset = users.objects.all()
		resource_name = 'users/login'
		excludes = ['apprenticeship_start', 'apprenticeship_end', 'department', 'last_login', 'date_created', 'date_modified', 'firstname', 'lastname']
		authorization = Authorization()
