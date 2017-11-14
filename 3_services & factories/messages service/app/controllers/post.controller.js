(function() {
    'use strict';
    
        angular
            .module('myApp')
            .controller('PostCtrl', PostCtrl);
    
        PostCtrl.inject = ['messagesService'];
        function PostCtrl(messagesService) {
            var vm = this;
            
            vm.newMessage = "Hello World!";
    
            vm.addMessage = function(message){
                messagesService.add(message);
                vm.newMessage = '';
            };
    
        }
    })();