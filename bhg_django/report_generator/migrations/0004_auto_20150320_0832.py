# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('report_generator', '0003_auto_20150318_1333'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='report_type',
            field=models.ForeignKey(to='report_generator.ReportType'),
            preserve_default=True,
        ),
    ]
