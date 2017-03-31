define([
    'app'
], function (app) {
    'use strict';

    app.directive('btn', function () {
        return {
            // templateUrl: 'static/views/public/btn.html',
            template:'<div>direc_show!!! {{name}}</div>',
            restrict: 'E',
            replace: true
        };
    });
});