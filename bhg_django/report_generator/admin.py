from django.contrib import admin
from report_generator.models import Report
from report_generator.models import ReportType
from report_generator.models import User

admin.site.register(Report)
admin.site.register(ReportType)
admin.site.register(User)
