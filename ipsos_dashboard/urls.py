from django.urls import path
from ipsos_dashboard import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('survey', views.survey, name='survey'),
    path('survey-form', views.survey_form, name='survey-form'),
]

