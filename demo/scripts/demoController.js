

(function () {
    'use strict';

    var controllerId = 'demoController';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    function demoController($scope) {

        $scope.slide = 0;
        $scope.items = [
             { color: "#00BB00", text: "slide 1" },
             { color: "#BBBB00", text: "slide 2" },
             { color: "#00BBBB", text: "slide 3" },
             { color: "#0000BB", text: "slide 4" }
        ];

        $scope.next = function () {
            if($scope.slide >= $scope.items.length - 1)
            {
                return;
            }

            $scope.slide++;
        };

        $scope.prev = function () {
            if($scope.slide <= 0)
            {
                return;
            }

            $scope.slide--;
        };

        $scope.unshiftItemsAndStay = function () {
            $scope.items.unshift({ color: "#B0BB6B"});
            $scope.items.unshift({ color: "#BB00BB" });
            $scope.slide = $scope.slide + 2;

        }

        $scope.pushItemsAndStay = function () {
            $scope.items.push({ color: "#B0BB6B", text: "extra slide 1" });
            $scope.items.push({ color: "#BB00BB", text: "extra slide 2" });
        }


        $scope.imgSlide = 0;
        $scope.imgItems = [
            { source: "images/img_0.jpg", alt: "planet_0" },
            { source: "images/img_1.jpg", alt: "planet_1" },
            { source: "images/img_2.jpg", alt: "planet_2" }
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


    }

    angular.module('sildeDemoApp').controller(controllerId, ['$scope', demoController]);
})();