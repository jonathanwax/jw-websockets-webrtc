(function () {
    'use strict';

    describe('homeController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('home');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('homeController', {
                    $scope: scope
                });
            });
        });

        it('should define the message property', function () {

            expect(scope.message).toBeDefined();

        });

        it('should match with the message in scope', function () {

            expect(scope.message).toEqual('Congratulations! Your app is fully up and running.');

        });

    });

})();
