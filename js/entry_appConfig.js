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
        $urlRouterProvider.otherwise(homeUrl);

        //
        $stateProvider.state(homeUrl, amd.route({
            url: '/' + homeUrl,
            views: {
                'top_view': amd.route({
                    templateUrl: '../html/view_top.html'
                }),
                'menu_view': amd.route({
                    templateUrl: '../html/view_menu.html',
                    controller: 'MenuCtrl',
                    controllerUrl: '../js/Ctrl_Menu'
                }),
                'content_view': amd.route({
                    templateUrl: '../html/view_content.html'
                }),
            }
        }));

        var menus = [
            { state: "a", url: "../html/tpl_a.html", ctrl: "../js/Ctrl_A", ctrlName: 'ACtrl' },
            { state: "b", url: "../html/tpl_b.html", ctrl: "../js/Ctrl_B", ctrlName: 'BCtrl' },
            { state: "c", url: "../html/tpl_c.html", ctrl: "../js/Ctrl_B", ctrlName: 'CCtrl' }
        ];

        for (var index in menus) {
            if (!ng.isString(menus[index].state) || !ng.isString(menus[index].url) || !ng.isString(menus[index].url)) {
                return;
            }

            var a = homeUrl + '.' + menus[index].state;

            $stateProvider.state(a, amd.route({
                url: '/' + menus[index].state, //显示在地址栏的url
                views: {
                    'content_view_detail': amd.route({
                        templateUrl: menus[index].url,
                        controller: menus[index].ctrlName,
                        controllerUrl: menus[index].ctrl
                    })
                }
            }));
        }


    }]);



    //
    return app;
});