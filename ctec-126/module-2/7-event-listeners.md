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