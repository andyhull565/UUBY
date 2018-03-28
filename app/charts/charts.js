'use strict';

angular.module('UubyApp.charts', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/charts', {
            templateUrl: 'charts/charts.html',
            controller: 'ChartsController',
            controllerAs: 'vm'
        });
    }])
    .controller('ChartsController', [function() {
        var vm = this;
        vm.addUtility = addUtility;
        activate();

        function activate() {
            vm.selectedUtility = "Georgia Power";

            vm.utilities = [
                "GeorgiaPower",
                "Georgia Natural Gas",
                "Gas South",
                "SCANA Energy",
                "Commerce Energy",
                "Infinite Energy",
                "Watershed Management"
            ];

            vm.utilityOptions = "utility as utility for utility in vm.utilities";

            vm.utilityUser = null;
        }

        function addUtility() {
            console.log(vm.selectedUtility);
            console.log(vm.utilityUser.username);
            console.log(vm.utilityUser.password);
        }
    }]);
