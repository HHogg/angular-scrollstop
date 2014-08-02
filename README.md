=======
angular-scrollstop
==================

Simple AngularJS service and directives for detecting when a user has stopped and started scrolling.

#### Demo
Have a look at both of them in action , [demo here](http://hogg.io/projects/angular-scrollstop/test/browser/). 

#### Install
Bower: bower install angular-scrollstop

#### Contributions
This is my first attempt at a public re-usuable component so I'm bound to have made some msitakes somewhere. All contributions are very much welcome :smile: but please remember to edit the src files. I haven't got round to writing the unit tests yet so don't worry about checking them.

## Service
The event service provides two functions; scrollstart and scrollstop. Each can execute a callback and broadast and event down the scope of the element the event is attached to. 

#### Usage
 You can pass an element as the first argument to attach the scroll event to, and a callback function as the second argument.

```js
hgScrollEvent.scrollstop(element, function() {
   //... Callback stuff here.
});
```

You can just pass a callback function and the event will be attached to `$document`

```js
hgScrollEvent.scrollstop(function() {
   //... Callback stuff here.
});
```

You can just pass an element and it will broadcast the event down the scope and perform no callback. 

```js
hgScrollEvent.scrollstop(element);
```

Or you can supply no arguments to broadcast the event when the document is scrolled. 

```js
hgScrollEvent.scrollstop(element);
```

Just listen for the event like you would with any other, with the angular event, scroll event, and the attached elment provided. 

```js
($)scope.$on('scrollstop', function(ngEvent, scrollEvent, attachedElement) {
    // ... Stuff here.
});
```

## Directives
Two directives are provided to easily use the scrollstop and start events on elements. The events are binded to the element they are used on and can be provided (or not) a callback function. 

#### Usage

```html
<body hg-scrollstart="foo()"></body>

<div hg-scrollstop="bar()"></div>
```

Simples... 
