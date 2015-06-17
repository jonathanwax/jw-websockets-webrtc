(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HomeController Object/function
     */
    function HomeController($scope, $log, $http, homeService, messageFormatter, nickName) {

        $scope.nickName = nickName;
        $scope.messageLog = 'Ready to chat!';
        $scope.sendMessage = function () {
            var match = $scope.message.match('^\/nick (.*)');

            if (angular.isDefined(match) && angular.isArray(match) && match.length === 2) {
                var oldNick = nickName;
                nickName = match[1];
                $scope.message = '';
                $scope.messageLog = messageFormatter(new Date(),
                    nickName, 'nickname changed - from ' +
                    oldNick + ' to ' + nickName + '!') + $scope.messageLog;
                $scope.nickName = nickName;
            }

            $log.debug('sending message', $scope.message);
            homeService.emit('message', nickName, $scope.message);
            $scope.message = '';
        };

        $scope.$on('socket:broadcast', function (event, data) {
            $log.debug('got a message', event.name);
            if (!data.payload) {
                $log.error('invalid message', 'event', event, 'data', JSON.stringify(data));
                return;
            }
            $scope.$apply(function () {
                $scope.messageLog = $scope.messageLog + messageFormatter(new Date(), data.source, data.payload);
            });
        });

        //        // vm (view-model) is the object we bind to (this controller).
        //        var vm = this;
        //
        //        /***************** PRIVATE *******************/
        //        var _name = 'HomeController';
        //
        //        /**
        //         * getName() - Private function
        //         */
        //        function _getName(val) {
        //            return _name;
        //        }
        //
        //        function _getData() {
        //            $http.get('http://localhost:9000/api/test').
        //            success(function (data, status, headers, config) {
        //                vm.data = data;
        //            }).
        //            error(function (data, status, headers, config) {
        //                // called asynchronously if an error occurs
        //                // or server returns response with an error status.
        //            });
        //        }
        //
        //        /****************** PUBLIC *******************/
        //        vm.getName = _getName;
        //        vm.getData = _getData;
        //        vm.service = homeService;

    }

    angular
        .module('home')
        .controller('homeController', HomeController);

})();
