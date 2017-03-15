'use strict';

var helloWorldControllers = 
        angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl',
        ['$scope', '$location', '$http',
        function MainCtrl($scope, $location, $http) {
            $scope.message = "Hello World";
        }]);

helloWorldControllers.controller('ShowCtrl',
        ['$scope', '$location', '$http',
        function MainCtrl($scope, $location, $http) {
            $scope.message = "Show The World";
        }]);

helloWorldControllers.controller('CustomerCtrl',
        ['$scope',
        function CustomerCtrl($scope) {
            $scope.customerName = "Gilberto";
            $scope.customerNumber = "14390";
            
            $scope.changeCustomer = function() {
                $scope.customerName = $scope.cName;
                $scope.customerNumber = $scope.cNumber;
            };
        }]);
        
helloWorldControllers.controller('AddCustomerCtrl',
        ['$scope', '$location',
        function AddCustomerCtrl($scope, $location) {
            $scope.submit = function() {
                $location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity );
            };
        }]);

helloWorldControllers.controller('AddedCustomerCtrl',
        ['$scope', '$routeParams',
        function AddedCustomerCtrl($scope, $routeParams) {
            $scope.customerName = $routeParams.customer;
            $scope.customerCity = $routeParams.city;
        }]);

