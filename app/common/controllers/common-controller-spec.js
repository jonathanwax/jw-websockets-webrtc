(function () {
    'use strict';

    describe('commonController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('common');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('commonController', {
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
