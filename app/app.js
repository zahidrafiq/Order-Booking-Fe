'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.adminPanel',
    'myApp.repairScreenOne',
    'myApp.repairScreenTwo',
    'myApp.repairScreenThree',
    'myApp.repairScreenFour',
    'myApp.repairScreenFive',
    'myApp.repairScreen',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/repairScreenOne', {
            templateUrl: 'repairScreenOne/repairScreenOne.html',
            controller: 'repairScreenOne/repairScreenOneCtrl'
        })
        .when('/repairScreenTwo', {
            templateUrl: 'repairScreenTwo/repairScreenTwo.html',
            controller: 'repairScreenTwo/repairScreenTwoCtrl'
        })
        .when('/repairScreenThree', {
            templateUrl: 'repairScreenThree/repairScreenThree.html',
            controller: 'repairScreenThree/repairScreenThreeCtrl'
        })
        .when('/repairScreenFour', {
            templateUrl: 'repairScreenFour/repairScreenFour.html',
            controller: 'repairScreenFour/repairScreenFourCtrl'
        })
        .when('/repairScreenFive', {
            templateUrl: 'repairScreenFive/repairScreenFive.html',
            controller: 'repairScreenFive/repairScreenFiveCtrl'
        })
        .when('/repairScreen', {
            templateUrl: 'repairScreen/repairScreen.html',
            controller: 'repairScreen/repairScreenCtrl'
        })
        .when('/adminPanel', {
            templateUrl: 'adminPanel/adminPanel.html',
            controller: 'adminPanel/adminPanelCtrl'
        })
        .otherwise({
            redirectTo: '/view1'
        });

}]);