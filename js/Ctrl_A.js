/**
 * angular app controllers define (commonjs style)
 * @author caojun@qingdao
 */
define(function (require, exports, module) {
    var app = require('app');

    app.controller('ACtrl', ['$scope', function (_scope) {
        _scope.name = 'xxx';
    }]);
});