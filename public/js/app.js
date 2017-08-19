var app = angular.module('suus',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('catalog',{
            url: '/catalog',
            templateUrl: 'js/catalog/index.html',
            controller:'CatalogCtrl'
        });
    
    $locationProvider.hashPrefix('');
});