'use strict';

angular.module('myApp.adminPanel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/adminPanel', {
        templateUrl: 'adminPanel/adminPanel.html',
        controller: 'adminPanelCtrl'
    });
}])

.controller('adminPanelCtrl', [function() {

}]);