# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('report_generator', '0002_auto_20150318_0918'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='report_type',
            new_name='ReportType',
        ),
    ]
