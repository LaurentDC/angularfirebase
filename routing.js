'use strict';

newapp.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'itemList',
                templateUrl: 'views/list/list.html'
            })
            .when('/items/new', {
                controller: 'itemCreate',
                templateUrl: 'views/item/create.html'
            })
            .when('/items/remove', {
                controller: 'itemRemove',
                templateUrl: 'views/item/remove.html'
            })
    }
);
