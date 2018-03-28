'use strict';

var uubyApp = angular.module('UubyApp', [
  'ngRoute',
    'UubyApp.charts'
]);

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/charts'});
}]);



