(function () {
    'use strict';

    angular.module('app', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'angular-loading-bar', 'btford.socket-io', 'shell', 'home', 'help', 'common']);

    // CONFIG: App (module)
    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            /* Add New States Above */
            $urlRouterProvider.otherwise('');

        });

    // RUN: App (module)
    angular
        .module('app')
        .run(function ($rootScope) {

            $rootScope.safeApply = function (fn) {
                var phase = $rootScope.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

        });

    // VALUES
    angular
        .module('app')
        .value('nickName', 'anonymous')
        .value('messageFormatter', function (date, nick, message) {
            return date.toLocaleTimeString() + ' - ' +
                nick + ' - ' +
                message + '\n';

        });

})();
