from django.db import models


class reports(models.Model):
	description = models.CharField(max_length=200)
	report_date = models.DateTimeField('date published')
	date_created = models.DateTimeField('date published')
	date_modified = models.DateTimeField('date published')
	report_type = models.IntegerField(max_length=1)
