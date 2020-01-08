'use strict';

angular.module('myApp.repairScreenThree', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/repairScreenThree', {
        templateUrl: 'repairScreenThree/repairScreenThree.html',
        controller: 'repairScreenThreeCtrl'
    });
}])

.controller('repairScreenThreeCtrl', [function() {

}]);