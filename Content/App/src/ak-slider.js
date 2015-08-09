(function() {
    "use strict";
    var mod = angular.module('angular-slider', []);
    mod.directive('akSlider',
        function() {
            return {
                restrict: "A",
                scope: {
                    onSubmit: "&",
                    slide: "="
                },
                link: function(scope, element, attrs) {

                    function getSlidesDom() {
                        return element[0].querySelectorAll('ul[ak-slider] > li');
                    }

                    scope.$watch(function() {
                        angular.forEach(getSlidesDom(), function(child, index) {
                            child.style.cssText = 'transform :translate3d(' + (index - scope.slide) * 100 + '%,0px, 0px); -webkit-transform : translate3d(' + (index - scope.slide) * 100 + '%,0px, 0px); position : absolute;';

                        });
                    });

                }
            };
        }
    );
})();