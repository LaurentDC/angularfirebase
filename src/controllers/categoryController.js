'use strict';

newapp
  .controller('categoryIndex', function($scope) {

  })
  .controller('categoryList', function($scope, categoryProvider) {
      $scope.categories = categoryProvider.getCategories();
      $scope.createCategory = function(category){
        categoryProvider.create(category);
      }
      $scope.states = {};
      $scope.activeCategory = 'all';

  })
  .controller('categoryCreate', function($scope, categoryProvider) {
      $scope.categories = categoryProvider.getCategories();
  })
  .controller('categoryRemove', function($scope) {

  })
;
