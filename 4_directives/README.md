# AngularJS - Directives
Direcives are markers on the DOM element such as an attribute, a element name or a css class that will tell to AngularJS html compiler to attach a specific behavior to that DOM element.

AngularJS comes with some build-in directive rigth out of the box like ngBind, ngClass and ngModel.

Like controllers or services, you can also create your own directives for AngularJS to use.

## Directive Types
$compile can match directives based on elements names(E), attributes(A), class names(C), and comments(M).

The following shows the varios ways a directive that matches all 4 types can be referenced from within a template.
```html
<my-dir></my-dir>   

<span my-dir="exp"></span>

<!-- directive: my-dir exp -->

<span class="my-dir: exp;"></span>
```
A directive can specify which of the 4 matching types it supports in the restrict property of the directive definition object. The default is EA.

## Directives creation
Much like controllers, directives are registered on modules. To register a directive, you use the module.directive takes the normalized directive followed by a factory function. This factory function should return an object with the different options to tell $compile how the directive should behave when matched.

The factory function is invoked only once when the compiler matches the directive for the first time. You can perform any initialization work here. The function is invoked using $injector.invoke which makes it injectable just like a controller.

## Sample
```javascript
angular.module('app', [])
.directive('myDirective', function(){
    return {
            restrict: 'E',
            template: '<div>Hello World!</div>' 
    }
});
```

```html
<div ng-app="app">
        <my-directive></my-directive>
</div>
```
