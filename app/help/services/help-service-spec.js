(function () {
    'use strict';

    describe('helpService', function () {

        var service;

        beforeEach(function () {
            module('help');

            inject(function (helpService) {
                service = helpService;
            });
        });

        it('should return the content', function () {

            expect(service.getHelpContent()).toBeDefined();

        });

    });

})();
