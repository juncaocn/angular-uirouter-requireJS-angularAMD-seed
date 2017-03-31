define([
    'app'
], function (app) {
    'use strict';

    app.directive('deric_show', function () {
        return {
            // templateUrl: 'static/views/public/btn.html',
            template:'<div>deric_show</div>',
            restrict: 'E',
            replace: true
        };
    });
});