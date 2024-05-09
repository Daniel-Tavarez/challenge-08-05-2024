from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Company, Client, Address
from .serializers import CompanySerializer, ClientSerializer, AddressSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(detail=True, methods=['get'])
    def clients(self, request, pk=None):
        clients = Client.objects.filter(company_id=pk)
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data)

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    @action(detail=True, methods=['get'])
    def getClientsByCompany(self, request, pk=None):
        clients = self.queryset.filter(company_id=pk)
        serializer = self.get_serializer(clients, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def addresses(self, request, pk=None):
        addresses = Address.objects.filter(client_id=pk)
        serializer = AddressSerializer(addresses, many=True)
        return Response(serializer.data)

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer