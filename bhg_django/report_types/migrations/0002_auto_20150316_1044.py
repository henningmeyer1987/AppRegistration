# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('report_types', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='report_types',
            old_name='description',
            new_name='type_name',
        ),
        migrations.RemoveField(
            model_name='report_types',
            name='report_types',
        ),
    ]
