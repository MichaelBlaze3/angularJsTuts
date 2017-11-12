# AngularJS - Controllers

The controller is a javascript function that maintains the application data and behavior by implementing the `$scope` object. The $scope object is a glue between the controller and HTML.

You can attach properties and mothods to the $scope object inside a controller function, which will add or update the data and attach behaviours to HTML elements.

The **ng-controller** directive is used to specify a controller in HTML element, which will add behavior or maintain the data in that HTML element and its child elements.

The following example will show how to add properties and behavior to the controller.

```html
<!DOCTYPE html>
<html ng-app="myFirstApp"> 
    <head>
        <title>My First Application</title>
    </head>
    <body>
        <div ng-controller = "MainController">
            <form ng-submit="sendMyData()">
                <input type="email" placeholder="Email" ng-model="email"><br />
                <input type="password" placeholder="Password" ng-model="password"><br />
                <button type="submit">Submit</button>
            </form>
        </div>
        <script src="./node_modules/angular/angular.min.js"></script>
        <script src="./app/controller/main.controller.js"></script>
    </body>
</html>
```

```javascript
(function()
    angular
        .module('myFirstApp',[])
        .controller('MainController', MainController);
    
    function MainController($scope){
        $scope.sendMyData = sendMyData;
        $scope.email = "example@example.com";
        $scope.password = "sample";

        function sendMyData(){
            console.log("My Email: " + $scope.email);
            console.log("My Password: " + $scope.password);
        }
    }
)();
```

In this example, we are adding properties like the email and password, but also, we are adding some behavior by adding a function that reacts when the users is trying to send some information through the form.

The controller catches that interaction and displays it into the console
