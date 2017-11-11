# AngularJS - Modules
The angular.module is a global place for creating, registering and retrieving AngularJS modules. All modules (AngularJS core or 3rd party) that should be available to an application must be registered using this mechanism.

We can think of a module as a container for the different parts of your app - controllers, services, filters, directives, etc. 



## Modules in separate files
We can create separate Javascript files for each module shown below.

**index.html**
```html
<!DOCTYPE html>
<html lang="en" ng-app="main">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AngularJS - Modules</title>
</head>
<body>
    <h1>AngularJS Tutorial</h1>
    <div ng-controller="MainCtrl as vm">
        <h2>{{vm.description}}</h2>
    </div>
    <script src="./node_modules/angular/angular.min.js"></script>
    <script src="main.module.js"></script>
    <script src="main.controller.js"></script>
</body>
</html>
```
In the index.html file, we are defining the root of what would be our Angular application by using the `directive` **ngApp**, tipically place on the `<head>` or `<html>` tags.    

There are some points to have in consideration when using `ngApp`:
* Only one AngularJS application can be **auto-bootstraped** per HTML document. The first `ngApp` found in the document will be define as the root element to **auto-bootstrap** as an application.
* AngularJS application cannot be nested within each other.
* Do not use directives such as `ngIf`, `ngInclude` or `ngView` on the same element as `ngApp`. Doing this will misplace the app `$rootElement` and the app's `injector`, cousing animations to stop working.   


**main.module.js**
```javascript
(function() {
    'use strict';
    angular.module('main', []);
})();
```
AngularJS apps don't have a main method. Instead modules declaratively specify how an application should be bootrapped. There are some advantages to this approach:

* The declarative process is easier to understand.
* You can package code as reusable modules.

**main.controller.js**
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
In our application, we will use controllers, in `main.controller.js`, we are telling to our angularjs application `main` that it will be accesed by a controller named `MainCtrl` and it will bind to elements of the DOM.


## Loading and Dependecies
In its most basic phase, there are two blocks of modules that run during the app bootstraping.

* Configuration blocks: 
    The configuration block gets executed during the provider registrations and configuration phase. Only providers and constants can be injected into configuration blocks. This is to prevent accidental instantiation of services before they have been fully configured.

* Run blocks: The run blocks get executed after the injector is created and are used to kickstart the application. Only instances and constants can be injected into run blocks. This is to precent further system configuration during application run time.

```javascript
angular.module('myModule', [])
    .config(function(injectables){
        // This is an example of config block.
        // You can have as many of these as you want.
        // You can only inject providers(not instances) into config blocks.
    })
    .run(function(injectables){
        //This is an example of a run block.
        // You can have as many of these as you want.
        // You can only inject intances (not providers) into run block. 
    });
```

### Configuration blocks

### Run blocks