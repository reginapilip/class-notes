# Slide Deck 6 Notes

## Timing Events in JS

## `setInterval()`

- offered on the Window and Worker interfaces
- repeatedly calls a function/executes code snippet with a fixed time delay between each call. 
- returns an *interval ID* which uniquely identifies the interval (so you can remove it later - see clearInterval())

```js
function sayWhat() {
    console.log('Hello World!')
}

// setInterval(function, milliseconds)
const interval1 = setInterval(sayWhat, 3000)
```

## `clearInterval()`

- cancels a timed, repeating action previously established by setInterval()

```js
function sayWhat() {
    console.log('Hello World!')
}

// setInterval(function, milliseconds)
// 3000 mls = 3 seconds
const interval1 = setInterval(sayWhat, 3000)

// cancel set interval
// clear the interval using the interval1 var which holds the ID of the interval
clearInterval(interval1)
```

## `setTimeout()`

- sets a timer which executes a function or specified piece of code until the timer expires

```js
function sayWhat() {
    console.log('Hello World!')
}

// setInterval(function, milliseconds)
const interval1 = setTimeout(sayWhat, 3000)
```