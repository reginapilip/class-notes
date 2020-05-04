# `classList` Property

A *read-only* property that returns a live DOMTokenList (see resources below) collection of the class attributes of the element. 

- Used to manipulate the class list.
- Returns a DOMTokenList or an empty DOMTokenList (a DOMTokenList with the length property equal to 0)

`Note: The DOMTokenList itself is read-only, although you can modify it using the add() and remove() methods.`

```js
const elementClasses = elementNodeReference.classList

// select the elementNodeReference 
const myDiv = document.querySelector('#myID')

// view class list
const elementClasses = myDiv.classList

// same as line above but with chaining
const elementClasses = document.querySelector('#myID')
```

**See MDN Docs link (below) code to see how `classList.add()`, `classList.remove()`, and `classList.toggle()` are used**


## Some useful resources
- [classList Docs Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [DOMTokenList Docs Reference](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)

