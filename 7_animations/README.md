# AngularJS - Animations
The ngAnimate module provides support for CSS-based animations(keyframes and transitions) as well as Javascript-based animations via callback hooks. Animations are not enabled by default, however, by including ngAnimate the animation hooks are enabled for AngularJS app.

## How to get ngAnimate
In order to use the ngAnimate library, needs to be installed.

First, get the file:

* Google CDN: "//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-animate.js"
* NPM: npm install --save angular-animate@X.Y.Z
* Bower: bower install angular-animate#X.Y.Z

where X.Y.Z is the AngularJS version you are running.

Then, include angular-animate.js in your HTML:
```html
<script src="path/to/angular.js"></script>
<script src="path/to/angular-animate.js"></script>
```
Finally, add the depedency **ngAnimate** to your module, like this:
```javascript
angular.module('app', ['ngAnimate']);
```
With that you are ready to start.

## ng-hide and ng-show
Animating the transition between true and false states for ng-show and ng-hide is as simple as defining an extra CSS class for **your-class-selector.ng-hide**. The **.ng-hide** CSS will be activated when the element is being hidden. For example, take this div named 'box-one':
```html
<div class="box-one" ng-show="test.showBoxOne">
    Hello! I am <b>box one</b>.
</div>
```
To have this box fade in and out when it's being shown or hidden, the CSS would look like this:

```css
.box-one {
    -webkit-transition: all linear 0.5s;
    transition: all linear 0.5s;
}
.box-one:ng-hide {
    opacity: 0;
}
```

