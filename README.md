angular-scrollstop
==================

Simple AngularJS service and directives for detecting when a user has stopped and started scrolling.

#### Demo
Have a look at both of them in action , [demo here](http://hogg.io/projects/angular-scrollstop/demo/). 

#### Install
Bower: 
    $ bower install angular-scroll

Remeber to add `hg.scrollstop` to your module dependencies :wink: 

Service `hgScrollEvent`
-----------------------
The `hgScrollEvent` service provides two functions; scrollstart and scrollstop. Each can execute a callback and broadcast an event down the scope of the element the event is attached to. 

### `.scrollstop([element [, callback] ]);`
### `.scrollstart([element [, callback] ]);`

Pass an element as the first argument to attach the scroll event to, and a callback function as the second argument.

```js
hgScrollEvent.scrollstop(element, function() {
   //... Callback stuff here.
});
```

... or just pass a callback function and the event will be attached to `$document`

```js
hgScrollEvent.scrollstop(function() {
   //... Callback stuff here.
});
```

... or just pass an element and it will broadcast the event down the scope and perform no callback. 

```js
hgScrollEvent.scrollstop(element);
```

... or supply no arguments to broadcast the event when the document is scrolled. 

```js
hgScrollEvent.scrollstop();
```

Just listen for the event like you would with any other, with the angular event, scroll event, and the attached elment provided in the callback. 

```js
($)scope.$on('scrollstop', function(ngEvent, scrollEvent, attachedElement) {
    // ... Stuff here.
});
```

Directives
----------
Two directives are provided to easily use the scrollstop and start events on elements. The events are binded to the element they are used on and can be provided (or not) a callback function. 

### `hg-scrollstart`
```html
<body hg-scrollstart="foo()"></body>
```

### `hg-scrollstop`
```html
<div hg-scrollstop="bar()"></div>
```


Contributions
-------------
This is my first attempt at a public re-usuable component so I'm bound to have made some mistakes somewhere. All contributions are very much welcome :smile: but please remember to edit the src files.
