'use strict'

//require config
require.config(
    {
        baseUrl: 'js',
        paths: {
            'angular': '../libs/angular.min',
            'router': '../libs/angular-ui-router',
            'angularAMD': '../libs/angularAMD',
            'app': './entry_app'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'router': {
                deps: ['angular']
            },
            'angularAMD': {
                deps: ['angular']
            }
        },
        deps: ['app'] // kick off entry_app.js
    }
);

// require(['appConfig', 'angularAMD'], function (app, amd) {
//     // amd.bootstrap(app);
//     angular.bootstrap(document,['app']);
// });

