/**
 * angualr app start entry (use angularAMD.js to start app ,and depends entry_appConfig.js)
 * @author caojun@qingdao
 */
define(['./entry_appConfig', 'angularAMD'], function (app, amd) {
    'use strict';

    return amd.bootstrap(app);
});