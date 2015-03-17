from django.contrib import admin
from report_generator.models import reports
from report_generator.models import report_types
from report_generator.models import users

admin.site.register(reports)
admin.site.register(report_types)
admin.site.register(users)
