'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.adminPanel',
    'myApp.repairScreen',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
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