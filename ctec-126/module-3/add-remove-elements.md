# Adding and Removing Elements from DOM using JS

Methods
- `createElement()`
- `appendChild()`
- `insertBefore()`
- `remove()`
- `prepend()`

## `createElement()`

this method creates the HTML element specified by *tagName* (see parameter) - or an `HTMLUnknownElement` if *tagName* is not recognized.

Returns a new element. It doesn't add it to the web page automatically - you must do that after it's created

```js
const element = document.createElement(tagName[, options])

// create a new div
let newElement = document.createElement('div')
console.dir(newElement)
```

### Parameters

1. `tagName` string that specifies type of element to be created
2. `options` *(optional)* see Docs 

### Resources:
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Video](https://www.youtube.com/watch?v=VW8kNAous88)

## `appendChild()`

This method *adds a node to the end* of the list of children of a specified parent node.

It can also *move existing nodes* from their current position to the newly specified position (no need to remove the node from current position)

If you want to copy a node, use the `cloneNode()` method.

```js
elemenent.appendChild(aChild)

// chaining may not work as expected
// due to appendChild() returning the child element
let aBlock = document.createElement('block').appendChild(document.createElement('b'))
// sets aBlock to <b></b> only, which may not be what you want
```

### Resources:
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)


## `insertBefore()`

This method inserts a node *before a reference node* as a child of a specified parent node.

This method also is able to move an existing node to a new position - it will not copy it.

```js
let insertedNode = parentNode.insertBefore(newNode, referenceNode)
```

### Resources:
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)


## `remove()`

This method *removes* the object from the tree to which it belongs

```js
node.remove()
```

### Resources:
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

## `prepend()`

This method inserts a set of Node objects or DOMString objects *before the first child* of the ParentNode.

```js
// ParentNode.prepend(...nodesToPrepend)

const parent = document.createElement("div");
const p = document.createElement("p");
parent.prepend("Some text", p);

console.log(parent.childNodes); // NodeList [ #text "Some text", <p> ]
```

### Resources: 
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)

## DocumentFragment()

Uses: Note that browsers will re-render the page once a node is appended to the DOM tree. Frequently creating and appending nodes to the DOM tree will cause performance problems. 

It's recommended to organize a tree fragment in the background. Once the gragment is prepared, append its root node to the DOM tree. This way gets better performance.

So, instead of constantly manipulating things on the page, do it all in memory as a fragment, and then apply it to the DOM, which updates the page.

### Resources:
[DocumentFragment()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)

## `ChildNode.before()` and `ChildNode.after()`

- Inserts a set of Node or DOMString object in the children list of this ChildNode's parent, just before/after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
 
```js
// before()
const parent = document.createElement("div");
const child = document.createElement("p");
parent.appendChild(child);
const span = document.createElement("span");

// uncomment one:
child.before(span);
// child.after(span);

console.log(parent.outerHTML);
// before() output
// "<div><span></span><p></p></div>"

// after() output
// "<div><p></p><span></span></div>"

```