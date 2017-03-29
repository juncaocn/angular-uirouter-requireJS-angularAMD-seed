define(['app'], function (app) {
    'use strict';

    /**
     * 
     */
    app.controller('BCtrl', ['$scope', function (_scope) {
        _scope.name = 'yyy';
    }]);

    /**
     * 
     */
    app.controller('CCtrl', ['$scope', function (_scope) {
        _scope.name = 'ZZZ';
    }]);
});