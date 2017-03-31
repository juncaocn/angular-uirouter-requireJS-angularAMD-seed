/**
 * angular app controllers define
 * @author caojun@qingdao
 */
define(['app', './constants', './Services'], function (app, constants) {
    'use strict';

    /**
     * 
     */
    app.controller('MenuCtrl', ['$scope', '$http', 'Serv_a', 'Serv_b',
        function (_scope, _http, _Serv_a, _Serv_b) {
            _Serv_a.serv1();
            _Serv_a.serv2();
            _Serv_b.serv1();
            _Serv_b.serv2();

            _Serv_a.setMenus(_scope);
        }]);
});