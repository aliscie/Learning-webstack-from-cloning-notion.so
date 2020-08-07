from myapp.models import elements, styles, components
from .serializers import elementsSerializer, stylesSerializer, componentsSerializer
from rest_framework import viewsets


class elementsVeiwSet(viewsets.ModelViewSet):
    serializer_class = elementsSerializer
    queryset = elements.objects.all()


class stylesVeiwSet(viewsets.ModelViewSet):
    serializer_class = stylesSerializer
    queryset = styles.objects.all()


class componentsVeiwSet(viewsets.ModelViewSet):
    serializer_class = componentsSerializer
    queryset = components.objects.all()
