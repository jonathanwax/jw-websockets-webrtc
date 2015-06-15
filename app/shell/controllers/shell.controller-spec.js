(function () {
    'use strict';

    describe('shell', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('shell');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('shell', {
                    $scope: scope
                });
            });
        });

        it('should ...', function () {

            //TODO: Implement your controller spec logic here
            //expect(ctrl.doSomething()).toEqual('something');

        });

    });

})();
