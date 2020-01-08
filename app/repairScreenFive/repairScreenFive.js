'use strict';

angular.module('myApp.repairScreenFive', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/repairScreenFive', {
        templateUrl: 'repairScreenFive/repairScreenFive.html',
        controller: 'repairScreenFiveCtrl'
    });
}])

.controller('repairScreenFiveCtrl', [function() {

}]);