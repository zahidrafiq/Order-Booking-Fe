'use strict';

angular.module('myApp.repairScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/repairScreen', {
        templateUrl: 'repairScreen/repairScreen.html',
        controller: 'repairScreenCtrl'
    });
}])

.controller('repairScreenCtrl', [function() {

}]);