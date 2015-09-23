# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pergunta',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('pergunta_texto', models.CharField(max_length=200)),
                ('data', models.DateTimeField(verbose_name='date_published')),
            ],
        ),
        migrations.CreateModel(
            name='Reposta',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('resposta_texto', models.CharField(max_length=200)),
                ('votos', models.IntegerField(default=0)),
                ('pergunta', models.ForeignKey(to='blog.Pergunta')),
            ],
        ),
        migrations.RemoveField(
            model_name='post',
            name='author',
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
