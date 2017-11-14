(function() {
    'use strict';

    angular
        .module('app')
        .directive('welcome', welcome);

    function welcome() {
        var directive = {
            restrict: 'E',
            template: `
                <div><h3>Directive by Element</h3></div>
            `
        };
        return directive;
    }

})();