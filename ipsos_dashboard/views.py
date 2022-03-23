from distutils.log import log
from multiprocessing import context
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def dashboard(request):
    greeting = {}
    greeting['heading'] = "Dashboard"
    greeting['pageview'] = "Dashboards"        
    return render(request, 'dashboard/dashboard.html',greeting)


@login_required
def survey(request):
      
    context = {
        'heading': "Survey",
        'pageview': "Survey"
    }      
    return render(request, 'pages/survey.html',context)


def survey_form(request):
    context = {
        'heading': "Survey Form",
        'pageview': "Survey Form"
    }      
    return render(request, 'pages/forms.html',context)