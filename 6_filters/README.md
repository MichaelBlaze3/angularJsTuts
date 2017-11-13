# AngularJS - Filters

Filters give a format to the value of an expression when is display to the user.

Filter can be used on templates, controllers or services.

AngularJS has a collection of built-in filters.

## Creating a filter
In order to create a filter a filter to manipulate the outcome of an Angular expresion, the name of the filter needs to be added, to demonstrate this, we will call our filter "capitalize" after the pipe |. This will let Angular know that needs to execute that filter in that expression.

```html
<input type="text" ng-model="vm.myString"/>
<h2>{{ vm.myString | capitalize }}</h2>
```

Now that the name of our filter has been defined. We need to create a filter called 'capitalize' that will take the string from the angular expression and capitalize all the letters in it.

Adding filters to the Angular applications can be done by calling the filter method on angular.module. Something like this:

```javascript
angular.module('app', []).filter('filterName', filterFunction);
```

The filter function need to return a function that will be executed everytime angular needs to evaluate an expression. That function then needs to return the final string output:

```javascript
angular.module('app', [])
.controller('MainCtrl', MainCtrl)
.filter('capitalize', capitalizeFilter);

function MainCtrl(){
    var vm = this;
    vm.myString = "hello world";
}

function capitalizeFilter(){
    return function(text){
        return text.toUpperCase();
    }
}
```
Filters are not just limited to manipulating text output of Angular expressions - they can also be used to intelligently sort lists repeated by ng-repeat. For example, wouldn't it be great if we could filter the items in the people scope object below based on a search string?

```javascript
angular.module('app', [])
.controller('MainCtrl', MainCtrl);

function MainCtrl(){
    var vm = this;
    vm.people = [
        {
            name: "Anderson",
            born: "California"
        },
        {
            name: "Gabriel",
            born: "Toronto"
        },
        {
            name: "Aaron",
            born: "Chicago"
        }
    ];
}
```
In order to search over the people array, we need to pass the search variable into the ng-repear filter:
```html
<body ng-app="app" ng-controller="Mainctrl as vm">
    <input type="text" ng-model="search"/>

    <p ng-repeat="person in vm.people | filter: search">
        {{person.name}}
    </p>
</body>
```
By default, this will search all attributes in the people objects(this currently includes the attributes name and born). You can have it search a specific attribute by dotting the field name in the model like so:

```html
<input type="text" ng-model="search.name"/>
```

For a general search across all attributes, you can simply use $.
```html
<input type="text" ng-model="search.$" />
```

## Built-in filters
AngularJS comes with some very usefull filters that can be used for a basic sorting and filtering.

### orderBy
```html
<p ng-repeat="person in vm.people | orderBy:'name' ">{{person.name}}</p>
```
This filter helps you to sort the collection by the name field.

### limitTo
```html
<p ng-repeat="person in vm.people | limitTo:5 ">{{person.name}}</p>
```
This filter will return only the first 5 results.

### Changin filters
```html
<p ng-repeat="person in vm.people | filter: search | orderBy:'name' | limitTo: 5 ">{{person.name}}</p>
```

This filter will filter the entire collection against the search model, order the matched results by the namme attribute, and limit the results set to 5.

