from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return render(request, "index.html",)
#def home(request):
    return render(request, "home.html", {"name": "otu"})


#def add(request):

    val1 = int(request.POST["num1"])
    val2 = int(request.POST["num2"])
    res = val1 + val2
    return render(request, "result.html", {'result':res})        

