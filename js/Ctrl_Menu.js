/**
<<<<<<< HEAD
 * angular app controllers define (commonjs style)
=======
 * angular app controllers define
>>>>>>> domready
 * @author caojun@qingdao
 */
define(function (require, exports, module) {
    'use strict';

    require('./Services');
    var app = require('app');
    var constants = require('./constants');

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