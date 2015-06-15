(function () {
    'use strict';

    describe('commonService', function () {

        var service;

        beforeEach(function () {
            module('common');

            inject(function (commonService) {
                service = commonService;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
