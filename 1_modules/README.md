# AngularJS - Modules
The angular.module is a global place for creating, registering and retrieving AngularJS modules. All modules (AngularJS core or 3rd party) that should be available to an application must be registered using this mechanism.

We can think of a module as a container for the different parts of your app - controllers, services, filters, directives, etc. 

## Modules in separate files
We can create separate Javascript files for each module shown below.

```html
    <!DOCTYPE html>
    <html lang="en" ng-app="main">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <link rel="stylesheet" href="style.css">

        <title>ngModules</title>
    </head>
    <body>
        <h1>AngularJS Tutorial</h1>

        <h2>Animations</h2>
        <div ng-init="checked = true">
            <label>
                <input type="checkbox" ng-model="checked" /> Is visible
            </label>
            <div class="content-area sample-show-hide" ng-show="checked">
                Content...
            </div>
        </div>

        <script src="./node_modules/angular/angular.min.js"></script>
        <script src="./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js"></script>
        <script src="./node_modules/angular-animate/angular-animate.min.js"></script>

        <script src="app.module.js"></script>
        <script src="internal.module.js"></script>
        <script src="external.module.js"></script>

    </body>
    </html>
```