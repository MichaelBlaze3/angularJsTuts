# AngularJS - Tutorial and Samples

## General
* [What is AngularJS?](#what-is-angularjs?)    
* [Model View - View Model](#model-view-viewmodel)
* [Single Responsability](#single-resposability)

## Content
1. [Modules]()
2. [Controllers]()
3. [Services]()
4. [Factories]()
5. [Directives]()
6. [Routing]()
7. [Filters]()
8. [Animations]()

## What is AngularJS?
AngularJS is a JavaScript framework designed for creating Single Page Applications(SPA) mainly maintained by Google.

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