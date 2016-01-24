'use strict';

newapp.service('categoryProvider', ["$firebaseArray", 
    function($firebaseArray) {
        var ref = new Firebase('https://myfirstcollection.firebaseio.com/categories');
        var myCategories = $firebaseArray(ref);

        this.getCategories = function() {
            return myCategories;
        }
        this.create = function(category) {
            category['catId'] = myCategories.length + 1;
        	myCategories.$add(category);
        }
        this.remove = function(category) {
        	myCategories.$remove(category);
        }
    }
]);
