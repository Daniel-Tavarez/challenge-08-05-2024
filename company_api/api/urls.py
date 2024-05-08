from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, ClientViewSet, AddressViewSet

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'addresses', AddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
