'use strict';

newapp.service('itemProvider', ['$firebaseArray', 
    function($firebaseArray) {
        var ref = new Firebase('https://myfirstcollection.firebaseio.com/items');
        var myItems = $firebaseArray(ref);

        this.getItems = function() {
            return myItems;
        };
        this.create = function(item) {
            item['itemId'] = myItems.length + 1;
            myItems.$add(item);
        };
        this.remove = function(item) {
            myItems.$remove(item);
        };
        this.update = function(item) {
            // item.title = angular.getElementById('itemTitle');
            // item.name = angular.getElementById('itemName');
            // item.category_id = angular.getElementById('itemCategory');
            // console.log(item);
            myItems.$save(item);
        };
    }
]);
