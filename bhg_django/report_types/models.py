from django.db import models


class report_types(models.Model):
	type_name = models.CharField(max_length=200)
