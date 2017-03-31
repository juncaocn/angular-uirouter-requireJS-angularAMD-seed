/**
<<<<<<< HEAD
 * angualr app start entry (use angularAMD.js to start app ,and depends entry_appConfig.js) (commonjs style)
 * @author caojun@qingdao
 */
define(function (require, exports, module) {
    'use strict';

    var appconfig = require('./entry_appConfig');
    var amd = require('angularAMD');

    return amd.bootstrap(appconfig);
=======
 * angualr app start entry (use angularAMD.js to start app ,and depends entry_appConfig.js)
 * @author caojun@qingdao
 */
define(['domReady', './entry_appConfig', 'angularAMD'], function (domReady,appConfig, amd) {
    'use strict';

    return amd.bootstrap(appConfig);
>>>>>>> domready
});