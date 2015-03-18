# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('report_generator', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='reports',
            new_name='report',
        ),
        migrations.RenameModel(
            old_name='report_types',
            new_name='report_type',
        ),
        migrations.RenameModel(
            old_name='users',
            new_name='user',
        ),
    ]
