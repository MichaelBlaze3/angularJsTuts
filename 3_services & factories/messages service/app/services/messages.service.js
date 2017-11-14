(function() {
    'use strict';
    
        angular
            .module('myApp')
            .factory('messagesService', messagesService);
    
        function messagesService() {
            var messages = {};
    
            messages.list = [];
    
            messages.add = function(message) { 
                messages.list.push({id: messages.list.length, text: message});
            };
    
            return messages;
    
        }
    })();