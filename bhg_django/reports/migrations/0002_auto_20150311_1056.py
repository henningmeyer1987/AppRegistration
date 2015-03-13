# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reports',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 11, 10, 56, 14, 139833, tzinfo=utc), verbose_name=b'date published'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='reports',
            name='date_modified',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 11, 10, 56, 21, 803866, tzinfo=utc), verbose_name=b'date published'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='reports',
            name='report_type',
            field=models.IntegerField(default=0, max_length=1),
            preserve_default=False,
        ),
    ]
