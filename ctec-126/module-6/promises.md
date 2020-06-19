# Promises

## Definition

From MDN:

A promise is an *object* representing eventual completion or failure of an asynchronous operation and its resulting value. 

A promise is a *returned object* to which you *attach* callbacks (instead of passing callbacks into a function)

Promises enable you to return values on asynchronous methods like synchronous methods. It allows you to attach handlers with a value that is not known yet. 

## State

1. **pending** initial state
2. **fulfilled** operation completed successfully
3. **rejected** operation failed

A **pending** promise can either be **fulfilled** with a *value* or **rejected** with a *reason* (error).

Depending on which state the promise is in, the associated handlers (to that state, queued up by the promises `then` method) are called.

## Methods

1. `then` 
   1. returns a promise and takes two arguments: callback functions for the sucess and failure cases of a promise
   2. appends fulfillment and rejection handlers to a promise and returns a new promise
2. `catch` 
   1. deals with rejected cases only (internally calls `obj.then(undefined, onRejected)`)
   2. appends a rejection handler callback to the promise and returns a new promise
3. `finally`
   1. deals with a settled promise
   2. appends a handler to the promise and returns a new promise that is resolved when the original promise is resolved

```js
// using callbacks 
function successCallback(result) {
    console.log("Audio file ready at URL: " + result)
}

function failureCallback(error) {
    console.log("Error generating audio file: " + error)
}

// passing in callback functions as parameters
createAudioFileAsync(audioSettings, successCallback, failureCallback)


// promises version of above code
// called an asynchronous function call
createAudioFileAsync(audioSettings).then(successCallback, failureCallback)

```

## Arrow syntax

```js
doSomething()
.then(function(result) {
    return doSomethingElse(result)
})
.then(function(newResult) {
    return doThirdThing(newResult)
})
.then(function(finalResult) {
    console.log("Got the final result: " + finalResult)
})
.catch(failureCallback)

// rewritten using arrow functions
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
    console.log(`Got the final result: ${finalResult}`)
})
.catch(failureCallback)
// with arrow functions () => x is short for () => {return x}
```

## Other

**Callback functions** are like normal functions but are passed into other functions to be called at a later stage. Event listeners are a great example of this. 

```js
myBtn.addEventListener("click", function () {
    console.log("The button was pressed")
})
```

In the code above, the function, passed in as a parameter of the event listener, will only execute upon a click event.



## Resources
- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [dcode Video on Callback Functions](https://www.youtube.com/watch?v=3O_RRVqm6Zg)