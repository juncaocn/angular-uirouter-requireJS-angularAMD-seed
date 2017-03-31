/**
<<<<<<< HEAD
 * angular app controllers define (multi controller) (commonjs style)
=======
 * angular app controllers define (multi controller)
>>>>>>> domready
 * @author caojun@qingdao
 */
define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    /**
     * Serv_a在更早的Ctrl_Menu中已经require，此处可直接引用
     */
    app.controller('BCtrl', ['$scope', 'Serv_a', function (_scope, Serv_a) {
        Serv_a.serv1();
        _scope.name = 'yyy';
    }]);

    /**
     * 
     */
    app.controller('CCtrl', ['$scope', function (_scope) {
        _scope.name = 'ZZZ';
    }]);
});