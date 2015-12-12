

(function () {
    'use strict';

    var controllerId = 'demoController';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    function demoController($scope) {


        $scope.slide = 0;
        $scope.foo = "bar";
        $scope.items = [
             { color: "#00BB00", text: "slide 1" },
             { color: "#BBBB00", text: "slide 2" },
             { color: "#00BBBB", text: "slide 3" },
             { color: "#0000BB", text: "slide 4" }
        ];

        $scope.next = function () {

            $scope.slide++;
        };

        $scope.prev = function () {
            $scope.slide--;
        };

        $scope.updateArr = function () {
            $scope.slide = $scope.slide + 2;
            $scope.items.unshift({ color: "#B0BB6B", text: "extra slide 1" });
            $scope.items.unshift({ color: "#BB00BB", text: "extra slide 2" });
        }
    }

    angular.module('sildeDemoApp').controller(controllerId, ['$scope', demoController]);
})();