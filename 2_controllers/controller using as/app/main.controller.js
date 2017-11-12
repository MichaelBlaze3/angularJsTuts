(function() {
    'use strict';

    angular
        .module('myApp',[])
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.sendMyData = sendMyData;
        vm.email = "default@email.com";
        vm.password = "default";
        function sendMyData(){
            console.log(vm.email);
            console.log(vm.password);
        }
    }
})();