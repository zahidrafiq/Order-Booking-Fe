'use strict';

angular.module('myApp.repairScreenOne', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/repairScreenOne', {
        templateUrl: 'repairScreenOne/repairScreenOne.html',
        controller: 'repairScreenOneCtrl'
    });
}])

.controller('repairScreenOneCtrl', [function() {

}]);