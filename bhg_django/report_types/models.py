from django.db import models


class report_types(models.Model):
	description = models.CharField(max_length=200)
	report_types = models.IntegerField(max_length=1)
