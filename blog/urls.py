from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^index/$', views.inde, name='inde'),
	url(r'^MEUAPP/$', views.MEUAPP, name='MEUAPP'),
	url(r'^desenvolvedor/$', views.desenvolvedor, name='desenvolvedor'),
    url(r'^$', views.index, name='index'),
    url(r'^home/$', views.home, name='home'),
    url(r'^(?P<pergunta_id>[0-9]+)/$', views.detail, name='detail'),
     # ex: /polls/5/results/
    url(r'^(?P<pergunta_id>[0-9]+)/results/$', views.results, name='results'),
    # ex: /polls/5/vote/
    url(r'^(?P<pergunta_id>[0-9]+)/vote/$', views.vote, name='vote'),
]