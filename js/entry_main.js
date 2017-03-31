'use strict';

/**
 * require config 
 * caojun@qingdao
 */
require.config({
    //
    baseUrl: 'js',

    //depends
    paths: {
        'domReady':'../libs/domReady',
        'angular': '../libs/angular.min',
        'router': '../libs/angular-ui-router',
        'angularAMD': '../libs/angularAMD',
        'app': './entry_app'
    },

    //
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

    // kick off entry_app.js
    deps: ['app']
});

