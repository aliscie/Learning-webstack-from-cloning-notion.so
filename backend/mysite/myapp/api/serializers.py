from rest_framework import serializers
from myapp.models import elements, styles, components
from rest_framework_recursive.fields import RecursiveField


class elementsSerializer(serializers.ModelSerializer):
    sub = RecursiveField(many=True, required=False)

    class Meta:
        model = elements
        fields = ('id', 'tag', 'text', 'src', 'style', 'table', 'main', 'sub')


class stylesSerializer(serializers.ModelSerializer):
    sub = RecursiveField(many=True, required=False)

    class Meta:
        model = styles
        fields = ('id', 'name', 'style', 'main', 'sub')


class componentsSerializer(serializers.ModelSerializer):
    sub = RecursiveField(many=True, required=False)

    class Meta:
        model = components
        fields = ('id', 'name', 'tag', 'text', 'src', 'style', 'main', 'sub')
