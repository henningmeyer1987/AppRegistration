from django.contrib import admin
from report_generator.models import report
from report_generator.models import report_type
from report_generator.models import user

admin.site.register(report)
admin.site.register(report_type)
admin.site.register(user)
