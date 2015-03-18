from django.conf.urls import patterns, include, url
from django.contrib import admin
from report_generator.models import User, Report, ReportType
from rest_framework import routers, serializers, viewsets


class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ('Login', 'Firstname', 'Lastname', 'Department')


class ReportSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Report
		fields = ('description', 'report_date')


class ReportTypeSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = ReportType
		fields = ('id', 'type_name')


class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer


class ReportViewSet(viewsets.ModelViewSet):
	queryset = Report.objects.all()
	serializer_class = ReportSerializer


class ReportTypeViewSet(viewsets.ModelViewSet):
	queryset = ReportType.objects.all()
	serializer_class = ReportTypeSerializer


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'reports', ReportViewSet)
router.register(r'report_types', ReportTypeViewSet)


urlpatterns = patterns('',
	# Examples:
	# url(r'^$', 'bhg_django.views.home', name='home'),
	# url(r'^blog/', include('blog.urls')),
	url(r'^', include(router.urls)),
	url(r'^admin/', include(admin.site.urls))
)
