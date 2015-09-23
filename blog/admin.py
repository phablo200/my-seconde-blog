from django.contrib import admin

from .models import *

class ChoiceInline(admin.TabularInline):
    model = Reposta
    extra = 3

class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['pergunta_texto']}),
        ('Date information', {'fields': ['data'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]

admin.site.register(Pergunta, QuestionAdmin)

