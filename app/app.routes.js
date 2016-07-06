var routes = angular.module('app.routes', []);

routes.config(['$stateProvider','$urlRouterProvider','$locationProvider',

// Create all the application routes
function ($stateProvider,$urlRouterProvider,$locationProvider){

    // pretty angular urls
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home',{
            url : '/',
            templateUrl : '/app/components/home/home.html',
            controller : 'homeCtrl as home'
        })
}

]);

