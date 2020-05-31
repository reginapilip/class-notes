# Best Practices & Coding Conventions for JavaScript

"Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp abstractions and straight-forward lines of control."

-- Robert C. Martin


## Magic Numbers

**Magic numbers** are hard-coded values that do not directly give away their meaning. 

```js
for (let i = 0; i < 86400; i++>) {
    // ...
}

```

It is not obvious what the number 86400 represents and the reason for its use. Thus, it is best to define magic numbers using variables.

```js
const SECONDS_IN_A_DAY = 86400;
for (let i = 0; i < seconds_in_a_day; i++>) {
    // ...
}

```

## Deep Nesting

Flat code is better than nested code.

Code that is "deeply nested" (has multiple levels of nesting) is hard to read. It's best to avoid this. 

Below is an example of deep nested code and how you can fix it using a function.

```js
// iterating nested array to get value
const exampleArray = [ [ [ 'value' ] ] ]

exampleArray.forEach( (array1) => {
    array1.forEach( (array2) => {
        array2.forEach( (element) => {
            console.log(element)
        })
    }
})

// the above can be achieved using a function
const retrieveFinalValue = (element) => {
    if(Array.isArray(element)) {
        return retrieveFinalValue(element[0])
    } 

    return element
}

```

## Comments

Don't rely on comments to explain your code. Comments can be used and are sometimes helpful, however, you should get into the habit of writing code that is ***self-documenting***.

## Functions

When writing functions, it's best to have each function encapsulate *one job* or serve *one purpose*.

```js
// don't do this
const addMultiplySubstract = (a,b,c) => {
    const addition = a + b + c
    const multiplication = a * b * c
    const subtraction =  a - b - c

    return `${addition} ${multiplication} ${subtraction}`
}

// do this
const addNumbers = (a,b,c) => a + b + c
const multiplyNumbers = (a,b,c) => a * b * c
const subtractNumbers = (a,b,c) => a - b - c

```

## Code Repition

When you find yourself copying + pasting code, it may be a sign you need to create a function.

There is an example of this in the **Deep Nesting** code above, where a function was created to remedy the repeating forEach loop.

[Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) can also prevent code repetition. See example below:

```js
// not using object destructuring
const getUserCredentials = (user) => {
    const name = user.name
    const surname = user.surname
    const password = user.password
}

// using object destructuring
const getUserCredentials = (user) => {
    const { name, surname, password } = user
}
```

## Variable Names

- Use camel case 
- Avoid one letter variable names (loops are okay (e.g.: i))

```js
const camelCase = ''
let thisIsMyVariable = 2

```

## Meaningful Names

Favor descriptive over concise. Shorter names aren't necessarily better names. It is important to be concise, however, you shouldn't sacrifice specificity.

- `findUser` < `findUserByNameOrEmail`
- `getUser` > `getUserFromDatabase`


## Consistent Verbs Per Concept

Functions usually **create**, **read**, **update**, or **delete** something.

`getUsers` should be used over names like `returnUsers`, `retrieveUsers`.

## Booleans that Read Well in `if-then` Statements

Which is more descriptive?
- `car.sedan` or `car.isSedan`
- `car.sold` or `car.isSold`
- `car.green` or `car.isGreen`
- `car.airbag` or `car.hasAirbag`

## Classes

Use nouns for class names.
- use *PascalCase* for class names

```js
// do this
class Car {
    //...
}

// don't do this
class MakeCar {
    //...
}
```

## Constant Values

`NOTE: const and constant values are not the same`

A constant value is a primitive value that will never be changed.

Variables declared with `const` do not define constant values. "The keyword const is a little misleading. It does not define a constant value. It defines a constant reference to a value. Because of this, we cannot change constant primitive values, but we can change the properties of constant objects." [W3Schools](https://www.w3schools.com/js/js_const.asp)

Capitalize constant values using snake upper case:
```js
const SECONDS_IN_A_DAY = 86400;
```

## Resource:

Watch this video for more information: 
- [Video by JavaScript Mastery](https://www.youtube.com/watch?v=RMN_bkZ1KM0)