'use strict';

angular.module('myApp.repairScreenTwo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/repairScreenTwo', {
        templateUrl: 'repairScreenTwo/repairScreenTwo.html',
        controller: 'repairScreenTwoCtrl'
    });
}])

.controller('repairScreenTwoCtrl', [function() {

}]);