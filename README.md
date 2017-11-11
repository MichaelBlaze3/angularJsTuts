![alt text](https://github.com/MichaelBlaze3/angularJsTuts/blob/master/_assets/angularjs2.png "AngularJS Logo")
# AngularJS - Tutorial and Samples

## About AngularJS
* [What is AngularJS?](#what-is-angularjs) 
* [AngularJS Setup](#angularjs-setup)   
* [Model - View - viewModel](#model-view-viewmodel)
* [Single Responsability](#single-resposability)


## Content
1. [Modules](https://github.com/MichaelBlaze3/angularJsTuts/tree/master/1_modules)
2. [Controllers](https://github.com/MichaelBlaze3/angularJsTuts/tree/master/2_controllers)
3. [Services]()
4. [Factories]()
5. [Directives]()
6. [Routing]()
7. [Filters]()
8. [Animations]()

## Resources
[AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

[The MVVM Pattern](https://msdn.microsoft.com/en-us/library/hh848246.aspx)

## What is AngularJS
AngularJS is a JavaScript framework designed for creating Single Page Applications(SPA) mainly maintained by Google.

## AngularJS Setup
There are different ways to add AngularJS into the project.
### CDN (Content Distribution Network)
The easiest and quickest way to start an AngularJS project is to point your html `<script>` tag to a **CDN** URL. By doing it this way, you dont have to download or maintain a local copy.

Here is an example using CDN.
```html
<!doctype html>
<html ng-app>
    <head>
        <title>My First AngularJS App</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
    </head>
    <body>
    </body>
</html>    
```
### NPM (Node Package Manager)
NPM is a package manager for Node.js packages.www.npmjs.com hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js.

To install the AngularJS package into your project, enter the following instruction:

$ sudo **npm install angular@1.6.6** --save

### Manually
You can download a copy of AngularJS to your project manually, just go to the AngularJS web portal.

URL: **https://angularjs.org** 

After finish the download, just unzip the content and make the necessary files accesible to your HTML by using the `<script>` tag.

## Model View viewModel
Its intent is to provide a clean separation of **concerns** between the user interface controls and their logic. 

There are three core components in the MVVM pattern: the **Model**, the **View**, and the **view model**. 

The components are decouple from each other, this allows us to: 

* Change the internal implementation without affecting the others.
* Work with each component independently.
* Isolate unit testing.

![alt text](https://github.com/MichaelBlaze3/angularJsTuts/blob/master/_assets/ModelViewViewModel.jpeg "Model View viewModel")


## Single Resposability
### Rule of 1
Define 1 component per file, recommended to be less than 400 lines of code.

This allows us to:
* Perfom Unit testing much easier.
* Read, maintain, and avoid name collisions with teams in source control.

The following examples defines the `app` module and its dependencies, defines a controller, a factory all in the same file.

```javascript
    /* avoid */
    angular
        .module('app', ['ngRouter'])
        .controller('SomeController', SomeController)
        .factory('someFactory', someFactory);

    function SomeController() { }

    function someFactory() { }
```

The same components are now separated into their own files.

```javascript
    /* recommended */
    
    /* app.module.js */
    angular
        .module('app', ['ngRouter']); 
    
    /* someController.js */ 
    angular
        .module('app')
        .controller('SomeController', SomeController);

    function SomeController() { }

    /* someFactory.js */ 
    angular
        .module('app')
        .factory('someFactory', someFactory);

    function someFactory() { }
```