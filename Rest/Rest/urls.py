    
    
  
from django.contrib import admin
from django.urls import path
from API import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('student/', views.StudentList.as_view()),
    path('student/<int:pk>', views.StudentUpdate.as_view())
]
