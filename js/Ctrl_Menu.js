/**
 * angular app controllers define
 * @author caojun@qingdao
 */
define(['app',
    './constants',
    './base_resources.js'   //load on first level view (for second level view to use)
], function (app, constants) {
    'use strict';

    /**
     * 
     */
    // app.controller('MenuCtrl', ['$scope', '$http', 'Serv_a', 'Serv_b', '$rootScope',
    //     function (_scope, _http, _Serv_a, _Serv_b, _rootScope) {
    //         if (_rootScope.login_flag) {

    //             _Serv_a.serv1();
    //             _Serv_a.serv2();
    //             _Serv_b.serv1();
    //             _Serv_b.serv2();

    //             _Serv_a.setMenus(_scope);
    //         }
    //     }]);

    app.controller('MenuCtrl',
        function ($rootScope, $scope, Serv_a, Serv_b) {
            if ($rootScope.login_flag) {

                Serv_a.serv1();
                Serv_a.serv2();
                Serv_b.serv1();
                Serv_b.serv2();

                Serv_a.setMenus($scope);
            }
        });
});