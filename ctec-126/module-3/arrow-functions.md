# JS Arrow Functions

- a way to write shorter function syntax
- redefines the `this` keyword to be seen outside of its defined scope, whereas regular functions define the `this` keyword to the scope of where the function is called -- see Web Dev Simplified video (link below) (variable scope)


```js 
// arrow functions with multiple parameters
const varName = (param1, param2) => {
    param1 + param2
}

// equivalent to:
const varName = (param1, param2) => param1 + param2

// single parameters 
const varName = (param1) {
    param1 * 100
}

// equivalent to:
const varName = param1 => param1 * 100

// no parameters 
const varName = () => {
    console.log("Hello world!")
}

// equivalent to:
const varName = () => console.log("Hello world!")

// anonymous functions - this is where arrow functions are most useful
document.addEventListener('click', function() {
    console.log('Click')
})

// equivalent to:
document.addEventListener('click', () => console.log('Click'))
```



## Resources:
- [W3Schools](https://www.w3schools.com/js/js_arrow_function.asp) 
- [Web Dev Simplified Video](https://www.youtube.com/watch?v=h33Srr5J9nY)