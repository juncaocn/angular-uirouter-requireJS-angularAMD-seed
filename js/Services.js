/**
 * angular service define
 * @author caojun@qingdao
 */
define(['app', './constants'], function (app, constants) {
    'use strict';

    /**
     * 使用return定义
     */
    app.service('Serv_a', ['$http', function (_http) {
        var serv1 = function () {
            console.log('serva1');
        };

        var serv2 = function () {
            console.log('serva2');
        };

        var setMenus = function (_scope) {
            _http.get('/js/data_menus.json').success(function (response) {
                for (var index in response) {
                    response[index].state = constants.homeUrl + '.' + response[index].state;
                }
                return _scope.menus = response;
            });
        };

        return { serv1: serv1, serv2: serv2, setMenus: setMenus };

    }]);

    /**
     * 使用this定义
     */
    app.service('Serv_b', ['$http', function (_http) {
        this.serv1 = function () {
            console.log('servb1');
        };

        this.serv2 = function () {
            console.log('servb2');
        };

        // return { serv2: serv2 };

    }]);
});

