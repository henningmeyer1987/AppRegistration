from django.db import models


class report_type(models.Model):
	type_name = models.CharField(max_length=200)


class user(models.Model):
	login = models.EmailField(max_length=75)
	password = models.CharField(max_length=100)
	firstname = models.CharField(max_length=50)
	lastname = models.CharField(max_length=50)
	apprenticeship_start = models.DateTimeField('date published')
	apprenticeship_end = models.DateTimeField('date published')
	department = models.CharField(max_length=50)
	last_login = models.DateTimeField('date published')
	date_created = models.DateTimeField('date published')
	date_modified = models.DateTimeField('date published')


class report(models.Model):
	description = models.CharField(max_length=200)
	report_date = models.DateTimeField('date published')
	date_created = models.DateTimeField('date published')
	date_modified = models.DateTimeField('date published')
	report_type = models.IntegerField(max_length=1)
