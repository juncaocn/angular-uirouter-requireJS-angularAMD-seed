/**
<<<<<<< HEAD
 * angular app controllers define (commonjs style)
 * @author caojun@qingdao
 */
define(function (require, exports, module) {
    var app = require('app');
=======
 * angular app controllers define
 * @author caojun@qingdao
 */
define(['app'], function (app) {
    'use strict';

>>>>>>> domready
    app.controller('ACtrl', ['$scope', function (_scope) {
        _scope.name = 'xxx';
    }]);
});