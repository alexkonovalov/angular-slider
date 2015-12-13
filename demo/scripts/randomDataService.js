

(function () {
    'use strict';

    var serviceId = 'randomDataService';

    function randomDataService($scope) {

        this.getRandomInt = function(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

    }

    angular.module('sildeDemoApp').service(serviceId, [randomDataService]);
})();