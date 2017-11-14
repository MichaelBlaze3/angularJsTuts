(function() {
    'use strict';

    angular
        .module('app')
        .directive('welcome', welcome);

    function welcome() {
        var directive = {
            restrict: 'C',
            template: `
                <div><h3>Directive by Class</h3></div>
            `
        };
        return directive;
    }

})();