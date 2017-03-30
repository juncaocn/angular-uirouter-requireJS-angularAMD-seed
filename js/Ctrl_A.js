/**
 * angular app controllers define
 * @auther caojun@qingdao
 */

/*define(['app'], function (app) {
    'use strict';

    
    app.controller('ACtrl', ['$scope', function (_scope) {
        _scope.name = 'xxx';
    }]);
});*/

/**
 * 兼容commonjs写法
 */
define(function (require, exports, module) {
    var app = require('app');
    app.controller('ACtrl', ['$scope', function (_scope) {
        _scope.name = 'xxx';
    }]);
});