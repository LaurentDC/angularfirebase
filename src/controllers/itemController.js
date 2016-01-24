'use strict';

newapp
  .controller('itemCreate', function($scope, itemProvider) {
      $scope.items = itemProvider.getItems();
  })
  .controller('itemList', function($scope, itemProvider, categoryProvider) {
      $scope.items = itemProvider.getItems();
      $scope.categories = categoryProvider.getCategories();
      $scope.editorEnabled = false;
      $scope.checked = false;
      $scope.editDisabled = true;
      $scope.currentPage = 0;
      $scope.maxPage = 10;
      $scope.filters = {};
      $scope.applyFilters = function(id) {
          $scope.filters = {category_id: id};
      }
      $scope.numberOfPages = function(){
        return Math.ceil($scope.items.length / $scope.maxPage);
      }
      $scope.createItem = function(item) {
        itemProvider.create(item);
      }
      $scope.editItem = function(item) {
        console.log(item);
        itemProvider.update(item);
      }
  })
  .controller('itemRemove', function($scope, itemProvider) {
      $scope.items = itemProvider.getItems();
      $scope.removeItem = function(item) {
          itemProvider.remove(item);
      }
  })
;
