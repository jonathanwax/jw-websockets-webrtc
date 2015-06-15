(function () {
    'use strict';

    describe('homeService', function () {

        var service;

        beforeEach(function () {
            module('home');

            inject(function (homeService) {
                service = homeService;
            });
        });

        it('should return welcome message', function () {

            expect(service.getMessage()).toEqual('Congratulations! Your app is fully up and running.');

        });

    });

})();
