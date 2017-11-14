(function() {
    'use strict';
    
        angular
            .module('app')
            .controller('MainCtrl', MainCtrl);
    
        // ControllerController.inject = ['dependency1'];
        function MainCtrl() {
            var vm = this;
            
            vm.people = [
                "Michael",
                "Thomas",
                "Kevin"
            ];
        }
    })();