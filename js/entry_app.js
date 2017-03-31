/**
 * angualr app start entry (use angularAMD.js to start app ,and depends entry_appConfig.js)
 * @author caojun@qingdao
 */
define(['domReady', './entry_appConfig', 'angularAMD'], function (domReady,appConfig, amd) {
    'use strict';

    return amd.bootstrap(appConfig);
});