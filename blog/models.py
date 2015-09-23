from django.db import models
from django.utils import timezone

from django.db import models
from django.utils import timezone
import datetime



class Pergunta(models.Model):
    pergunta_texto=models.CharField(max_length=200)
    data=models.DateTimeField('date_published')

    def __str__(self):
        string= (str(self.pergunta_texto) + " Data: " + str(self.data))
        return string
    def Data(self):
        return self.data >= timezone.now() - datetime.timedelta(days=1)
class Reposta(models.Model):

    pergunta=models.ForeignKey(Pergunta)
    resposta_texto=models.CharField(max_length=200)
    votos=models.IntegerField(default=0)

    def __str__(self):
        return self.resposta_texto