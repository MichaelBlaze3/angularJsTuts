(function() {
    'use strict';

    angular
        .module('app')
        .directive('welcome', welcome);

    function welcome() {
        var directive = {
            restrict: 'A',
            template: `
                <div><h3>Directive by Attribute</h3></div>
            `
        };
        return directive;
    }

})();