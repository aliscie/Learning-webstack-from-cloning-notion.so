from myapp.models import elements, styles, components
from .serializers import elementsSerializer, stylesSerializer, componentsSerializer
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class elementsVeiwSet(viewsets.ModelViewSet):
    serializer_class = elementsSerializer
    queryset = elements.objects.all()

    def list(self, request):
        queryset = elements.objects.filter(main__isnull=True)
        serializer = elementsSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = elements.objects.all()
        data = get_object_or_404(queryset, pk=pk)
        serializer = elementsSerializer(data)
        return Response(serializer.data)


class stylesVeiwSet(viewsets.ModelViewSet):
    serializer_class = stylesSerializer
    queryset = styles.objects.all()


class componentsVeiwSet(viewsets.ModelViewSet):
    serializer_class = componentsSerializer
    queryset = components.objects.all()
