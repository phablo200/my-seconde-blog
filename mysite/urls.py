from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^blog/', include('blog.urls', namespace="blog")),
     url(r'^accounts/', include('registration.backends.default.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
