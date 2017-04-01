define([
    'require',
    'app'
], function (require, factory) {
    'use strict';
    factory.controller('LoginCtrl', function ($rootScope, $state, $scope, $http) {
        if ($rootScope.login_flag) {
            $state.go('home');
        }

        /**
         * 
         */
        $scope.go_login = function () {
            console.log($scope.u_name + ' login...');

            $http.get('./js/data_menus.json').success(function (response) {
                $rootScope.login_flag = true;
                $state.go('home');
            });
        };
    });

    factory.controller('LogoutCtrl', function ($rootScope, $state, $scope, $http) {
        if (!$rootScope.login_flag) {
            $state.go('login');
        }

        /**
         * 
         */
        $scope.go_logout = function () {
            console.log(' logout...');

            $http.get('./js/data_menus.json').success(function (response) {
                $rootScope.login_flag = false;
                $state.go('login');
            });
        }
    });
});