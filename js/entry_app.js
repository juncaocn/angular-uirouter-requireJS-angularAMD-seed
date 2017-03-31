/**
 * angualr app start entry (use angularAMD.js to start app ,and depends entry_appConfig.js) (commonjs style)
 * @author caojun@qingdao
 */
define(function (require, exports, module) {
    'use strict';

    var appconfig = require('./entry_appConfig');
    var amd = require('angularAMD');

    return amd.bootstrap(appconfig);
});