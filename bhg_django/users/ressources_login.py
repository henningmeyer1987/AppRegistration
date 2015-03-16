# myapp/api.py
from tastypie.resources import ModelResource
from users.models import users
from tastypie.authorization import Authorization


class UsersLoginResource(ModelResource):
	class Meta:
		queryset = users.objects.all()
		resource_name = 'login'
		excludes = ['last_login', 'apprenticeship_start', 'apprenticeship_end', 'date_created', 'date_modified', 'department', 'firstname', 'lastname']
		authorization = Authorization()
