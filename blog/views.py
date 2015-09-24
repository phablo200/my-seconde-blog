from django.shortcuts import render, Http404, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext, loader
from .models import Pergunta
from django.core.urlresolvers import reverse

def index(request):
    return render(request, "index.html", {});

def detail(request, pergunta_id):
    try:
        pergunta = Pergunta.objects.get(pk=pergunta_id)
    except Pergunta.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, 'polls/detail.html', {'pergunta': pergunta})
def vote(request, pergunta_id):
    p = get_object_or_404(Pergunta, pk=pergunta_id)
    try:
        selected_reposta = p.reposta_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': p,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_reposta.votos += 1
        selected_reposta.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('blog:results', args=(p.id,)))	
def results(request, pergunta_id):
    pergunta = get_object_or_404(Pergunta, pk=pergunta_id)
    return render(request, 'polls/results.html', {'pergunta': pergunta})
def home(request):
	Lista = Pergunta.objects.order_by('-data')[:5]
	context = {'Lista': Lista}
	return render(request, "polls/home.html", context)
def desenvolvedor(request):
    return render(request, "polls/desenvolvedor.html", {})
def MEUAPP(request):
    return render(request, "polls/MEUAPP.html", {})	
