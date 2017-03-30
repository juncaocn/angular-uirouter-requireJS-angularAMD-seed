/**
 * angular app controllers define (multi controller)
 * @auther caojun@qingdao
 */
define(['app'], function (app) {
    'use strict';

    /**
     * Serv_a在更早的Ctrl_Menu中已经require，此处可直接引用
     */
    app.controller('BCtrl', ['$scope','Serv_a', function (_scope,Serv_a) {
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