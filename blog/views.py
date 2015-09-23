from django.shortcuts import render, Http404
from django.http import HttpResponse
from django.template import RequestContext, loader
from .models import Pergunta

def index(request):
    return render(request, "index.html", {});

def detail(request, pergunta_id):
    try:
        pergunta = Pergunta.objects.get(pk=pergunta_id)
    except Pergunta.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, 'polls/detail.html', {'pergunta': pergunta})
def vote(request, pergunta_id):
	return HttpResponse("Você está votando na pergunta %s" %pergunta_id)	
def results(request, pergunta_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % pergunta_id)
def home(request):
	Lista = Pergunta.objects.order_by('-data')[:5]
	context = {'Lista': Lista}
	return render(request, "polls/home.html", context)
def desenvolvedor(request):
    return render(request, "polls/desenvolvedor.html", {})
	
