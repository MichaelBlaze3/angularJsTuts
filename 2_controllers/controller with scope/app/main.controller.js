(function() {
    'use strict';

    angular
        .module('myApp',[])
        .controller('MainController', MainController);

    // MainController.$inject = ['$scope'];
    function MainController($scope) {
        $scope.sendMyData = sendMyData;
        $scope.email = "default@email.com";
        $scope.password = "default";
        function sendMyData(){
            console.log($scope.email);
            console.log($scope.password);
        }
    }
})();