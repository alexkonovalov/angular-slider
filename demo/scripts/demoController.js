

(function () {
    'use strict';

    var controllerId = 'demoController';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    function demoController($scope, randomDataService) {



        $scope.imgSlide = 0;

        $scope.imgItems = [
            getRandomImg(),
            getRandomImg(),
            getRandomImg()
        ];

        $scope.imgNext = function () {
            if($scope.imgSlide >= $scope.imgItems.length - 1)
            {
                return;
            }

            $scope.imgSlide++;
        };

        $scope.imgPrev = function () {
            if($scope.imgSlide <= 0)
            {
                return;
            }

            $scope.imgSlide--;
        };

        function getRandomImg () {
            var imgIndex = randomDataService.getRandomInt(0,4);

            return {
                source: "images/img_" + imgIndex + ".jpg",
                alt: "planet_" + imgIndex
            }
        }

        $scope.unshiftItemsAndStay = function () {
            $scope.imgItems.unshift(getRandomImg());
            $scope.imgItems.unshift(getRandomImg());
            $scope.imgSlide += 2;

        }

        $scope.pushItemsAndStay = function () {
            $scope.imgItems.push(getRandomImg());
            $scope.imgItems.push(getRandomImg());
        }

    }

    angular.module('sildeDemoApp').controller(controllerId, ['$scope', 'randomDataService', demoController]);
})();