(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HomeService Object/function
     */
    function HomeService(socketFactory) {

        var socket = socketFactory();
        socket.forward('broadcast');
        return socket;

        //        /***************** PRIVATE *******************/
        //
        //        //always bind to an object.property
        //        var _model = {
        //            message: ''
        //        };
        //
        //        // initialize
        //        _model.message = 'Yeay! Your app is running.';
        //
        //        /****************** PUBLIC *******************/
        //        var service = {
        //            get message() {
        //                return _model.message;
        //            }
        //        };
        //
        //        return service;

    }

    /* ANGULAR */
    angular
        .module('home')
        .factory('homeService', HomeService);

})();
