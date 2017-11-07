# AngularJS - Modules
The angular.module is a global place for creating, registering and retrieving AngularJS modules. All modules (AngularJS core or 3rd party) that should be available to an application must be registered using this mechanism.

We can think of a module as a container for the different parts of your app - controllers, services, filters, directives, etc. 

## Modules in separate files
We can create separate Javascript files for each module shown below.

index.html
```html
    <!DOCTYPE html>
    <html lang="en" ng-app="main">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>AngularJS - Modules</title>
    </head>
    <body>
        <h1>AngularJS Tutorial</h1>
        <div ng-controller="MainCtrl">
            <h2>{{description}}</h2>
        </div>

        <script src="./node_modules/angular/angular.min.js"></script>
        <script src="app.module.js"></script>
    </body>
    </html>
```

main.module.js
```javascript
    (function() {
        'use strict';
        angular.module('main', []);
    })();
```

main.controller.js
```javascript
    (function() {
        'use strict';
        angular
            .module('main')
            .controller('MainCtrl', MainCtrl);
        function MainCtrl(){
            var vm = this;
            vm.description = "This is a controller sample";
        }
    })();
```


