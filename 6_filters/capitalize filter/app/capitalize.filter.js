(function() {
    'use strict';
    
        angular
            .module('app')
            .filter('capitalize', capitalize);
    
        function capitalize() {
            return capitalizeFilterFn;
    
            ////////////////
    
            function capitalizeFilterFn(param) {
                return param.toUpperCase();
            }
        }
    })();