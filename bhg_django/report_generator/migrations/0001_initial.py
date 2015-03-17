# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='report_types',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type_name', models.CharField(max_length=200)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='reports',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('description', models.CharField(max_length=200)),
                ('report_date', models.DateTimeField(verbose_name=b'date published')),
                ('date_created', models.DateTimeField(verbose_name=b'date published')),
                ('date_modified', models.DateTimeField(verbose_name=b'date published')),
                ('report_type', models.IntegerField(max_length=1)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='users',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('login', models.EmailField(max_length=75)),
                ('password', models.CharField(max_length=100)),
                ('firstname', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('apprenticeship_start', models.DateTimeField(verbose_name=b'date published')),
                ('apprenticeship_end', models.DateTimeField(verbose_name=b'date published')),
                ('department', models.CharField(max_length=50)),
                ('last_login', models.DateTimeField(verbose_name=b'date published')),
                ('date_created', models.DateTimeField(verbose_name=b'date published')),
                ('date_modified', models.DateTimeField(verbose_name=b'date published')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
