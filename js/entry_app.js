//start angualr app (dependens angular.js & routerConfig.js)
define(['./entry_appConfig', 'angularAMD'], function (app, amd) {
    'use strict';

    return amd.bootstrap(app);
});