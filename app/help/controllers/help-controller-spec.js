(function () {
    'use strict';

    describe('helpController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('help');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('helpController', {
                    $scope: scope,
                    loadContent: []
                });
            });
        });

        it('should define helpContentList property', function () {

            expect(scope.helpContentList).toBeDefined();

        });

    });

})();
