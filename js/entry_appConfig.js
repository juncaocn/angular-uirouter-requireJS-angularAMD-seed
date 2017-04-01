/**
 * angular app config (depends ui-router and angularAMD)
 * @author caojun@qingdao
 */
define(['angular', 'router', 'angularAMD', './constants'], function (ng, rt, amd, constants) {
    'use strict';

    //
    var app = ng.module('app', ['ui.router']);

    //config router
    var _stateProvider, _urlRouterProvider;
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        _stateProvider = $stateProvider;
        _urlRouterProvider = $urlRouterProvider;
        var homeUrl = constants.homeUrl;

        //
        $urlRouterProvider.otherwise('login');

        // config 1级视图
        $stateProvider.state('login', amd.route({
            url: '/login',
            views: {
                'login_view': amd.route({
                    templateUrl: '../html/view_login.html',
                    controller: 'LoginCtrl',
                    controllerUrl: '../js/Ctrl_Login'
                })
            }
        })).state(homeUrl, amd.route({
            url: '/' + homeUrl,
            views: {
                'top_view': amd.route({
                    templateUrl: '../html/view_top.html',
                    controller: 'LogoutCtrl',
                    controllerUrl: '../js/Ctrl_Login'
                }),
                'menu_view': amd.route({
                    templateUrl: '../html/view_menu.html',
                    controller: 'MenuCtrl',
                    controllerUrl: '../js/Ctrl_Menu'
                }),
                'content_view': amd.route({
                    // templateUrl: '../html/view_content.html'
                    template: "<div>---view3---</div><br><div ui-view='content_view_detail'></div>"
                }),
            }
        }));
    }]);

    // config 2级视图
    app.run(function ($http) {
        console.log('app run ...    ');
        $http.get('/js/data_menus.json').success(function (menus) {
            console.log('app run ... ');

            var tmp_state;
            for (var index in menus) {
                tmp_state = menus[index].state;
                menus[index].state = constants.homeUrl + '.' + menus[index].state;

                _stateProvider.state(menus[index].state, amd.route({
                    url: '/' + tmp_state, //显示在地址栏的url
                    views: {
                        'content_view_detail': amd.route({
                            templateUrl: menus[index].url,
                            controller: menus[index].ctrlName,
                            controllerUrl: menus[index].ctrl
                        })
                    }
                }));
            }
        });
    });
    return app;
});