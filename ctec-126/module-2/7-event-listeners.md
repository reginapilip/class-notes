# Slide Deck 7

## `addEventListener()`

The EventTarget method `addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target
- common targets are Element, Document, and Window but the target may be any object that supports events (such as XMLHttpRequest)

```js
function helloWorld() {
    alert('Hello World!')
}

const p = document.querySelector('#hero')

p.addEventListener('click', helloWorld)
```

## `removeEventListener()`

removes a previously set event listener (as shown above)

- the event listener to be removed is identified using a combination of the event type, th event listener function itself, and various optional options that may affect the matching process

```js
p.removeEventListener('click', helloWorld)
```

## Note on Invoking Functions

```js
// notice that the function does not have () trailing after it
p.addEventListener('click', helloWorld)
```
- Adding the parantheses to the function INVOKES it (or calls it to perform its assigned role). Sometimes, like in the case of adding an event listener, you don't want to invoke the function yet - just identify it. To identify a function, drop the parantheses and just identify the name of the function. This tells the event listener which function to call, when the time comes for it to be called.
