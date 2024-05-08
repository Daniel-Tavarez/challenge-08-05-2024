from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Company, Client, Address
from .serializers import CompanySerializer, ClientSerializer, AddressSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    @action(detail=False, methods=['get'])
    def getClientsByCompany(self, request, pk=None):
        clients = self.queryset.filter(company_id=pk)
        serializer = self.get_serializer(clients, many=True)
        return Response(serializer.data)

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    @action(detail=False, methods=['get'])
    def getByClientId(self, request, pk=None):
        addresses = self.queryset.filter(client_id=pk)
        serializer = self.get_serializer(addresses, many=True)
        return Response(serializer.data)