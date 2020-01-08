'use strict';

angular.module('myApp.repairScreenFour', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/repairScreenFour', {
        templateUrl: 'repairScreenFour/repairScreenFour.html',
        controller: 'repairScreenFourCtrl'
    });
}])

.controller('repairScreenFourCtrl', [function() {

}]);