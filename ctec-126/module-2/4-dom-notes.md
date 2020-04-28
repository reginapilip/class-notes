# Slide Deck 4 Notes

## DOM

**DOM** (Document Object Model)
A cross-platform and language-independent interface that treats an XML or HTML document as a *tree structure* wherein *each node is an object* representing a part of the document. 

## `querySelector()`

returns a *single object* from the DOM
- returns the first match to the specified selector(s)
- selects only the **first instance** of the selector inserted as the parameter of the function
- returns null if no match

```js
const element = document.querySelector(selectors)
// specify what kind of selector you are looking for:
// tags = just tag name
// class = .class
// id = #id 
```

## `querySelectorAll()`

returns an *array of objects* from the DOM
- returns a static NodeList representing a list of the document's elements that match the specified group of selectors


### Live vs. Static NodeLists

[Visit MDN link for more info](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

**Live** changes in the DOM automatically update the collection

**Static** changes in the DOM does not affect the content of the collection

### Iterating through an Array of DOM element objects

```js
// select all elements of DOM
// assign to a variable
const allElements = document.querySelectorAll('*')

// iterate through created variable
// uses an anonymous function
allElements.forEach(function (element)  {
    console.log(`element: ${element.innerText}`)
})
```
## `getElementById()`

select a DOM element by its ID

```js
const element = document.getElementById('idName')
```

## `getElementsByClassName()` 

selects DOM elements by class names
- returns an array-like object of all child elements which have all of the given class name(s)

- classList.add/remove/toggle() functions

## `innerText` Property

gets and sets the text within the element

```js
// get inner text
const renderedText = htmlElement.innerText

// set inner text
htmlElement.innerText = string
```

## `innerHTML` Property

gets and sets the HTML and text within an element

```js
// get inner HTML
const content = element.innerHTML

// set inner HTML
element.innerHTML = htmlString
```

## `style` Property

gets and sets the CSS style properties and values for an element

- inline style
- get: returns a *CSSStyleDeclaration object* that contains a list of style properties/values for that element
- has the same (and highest) priority as inline style declarations

[Visit MDN resource for more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)