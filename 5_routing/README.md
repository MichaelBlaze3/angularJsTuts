# AngularJS - Routing - UI Router

For this section, we will use a 3rd party routing framework called `AngularUI Router`, which allows us to organize the parts of your interface into a `state machine`. Unlike the **$route service** in the angular ngRoute module, which is organized around URL routes, UI-Router is organized around `states`, which may optionally have routes, as well as other behavior, attached.

States are bound to named, nested and parallel views, allowing you to powerfully manage your application's interface. 


## Install UI-Router

### NPM install
```
npm install --save @uirouter/angularjs
```

### Bower install
```
bower install angular-ui-router
```

### Via a `<script>` tag
Latest stable version:
```javascript
<script src="//unpkg.com/@uirouter/angularjs/release/angular-ui-router.min.js"></script>
```

## Sample Application

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- CSS (load bootstrap) -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <style>
            .navbar { border-radius:0; }
        </style>

        <!-- JS (load angular, ui-router, and our custom js file) -->
        <script src="http://code.angularjs.org/1.2.13/angular.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>
        <script src="app.js"></script>
    </head>
    <body ng-app="routerApp">
        <!-- NAVIGATION -->
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="navbar-header">
                <a class="navbar-brand" ui-sref="#">AngularUI Router</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a ui-sref="home">Home</a></li>
                <li><a ui-sref="about">About</a></li>
            </ul>
        </nav>

        <!-- MAIN CONTENT -->
        <div class="container">

            <!-- THIS IS WHERE WE WILL INJECT OUR CONTENT ============================== -->
            <div ui-view></div>

        </div>
    </body>
</html>

```