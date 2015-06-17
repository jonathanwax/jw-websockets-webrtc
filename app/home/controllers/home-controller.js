(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HomeController Object/function
     */
    function HomeController($http, homeService) {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
        var _name = 'HomeController';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        function _getData() {
            $http.get('http://localhost:9000/api/test').
            success(function (data, status, headers, config) {
                vm.data = data;
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        /****************** PUBLIC *******************/
        vm.getName = _getName;
        vm.getData = _getData;
        vm.service = homeService;

    }

    angular
        .module('home')
        .controller('homeController', HomeController);

})();
