'use strict';

var uubyApp = angular.module('UubyApp', [
  'ngRoute'
]);

uubyApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/dashboard/dashboard.html',
            controller: DashboardController,
            activetab: 'dashboard'
        })
        .when('/charts', {
            templateUrl: '/charts/charts.html',
            controller: ChartsController,
            controllerAs: 'vm',
            activetab: 'charts'
        });

});


