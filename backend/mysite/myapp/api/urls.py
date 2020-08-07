from .views import elementsVeiwSet, stylesVeiwSet, componentsVeiwSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('elements', elementsVeiwSet, basename='elements')
router.register('styles', stylesVeiwSet, basename='styles')
router.register('components', componentsVeiwSet, basename='components')
urlpatterns = router.urls
