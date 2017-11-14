(function() {
    'use strict';
    
        angular
            .module('myApp')
            .controller('ListCtrl', ListCtrl);
    
        ListCtrl.inject = ['messagesService'];
        function ListCtrl(messagesService) {
            var vm = this;
            
            vm.messages = messagesService.list;
    
        }
    })();