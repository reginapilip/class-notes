# Arrays in JavaScript

## Arrays
Arrays are used to store multiple values in a single variable.

```js
// see arrays.html to run this code:

// declaration
const colors = ["red", "orange", "yellow"]

// accessing elements
// using index position
// accessing the first element
const firstColor = colors[0]
console.log(`The first color in the array is ${firstColor}`)

// accessing the last element
console.log(`The last color in the array is ${colors[colors.length - 1]}`)


// changing an element in the array
colors[0] = "purple"
console.log(`The first color in the array is now ${colors[0]}`)

// looping through an array
// for loop
for (let i = 0; i < colors.length; i++) {
    const element = `Color ${i + 1}: ${colors[i]}`
    console.log(element)
}

// forEach loop
let n = 0;
colors.forEach(color => {
    console.log(`Color: ${color}`)
})
```

## Some Array Methods

### `array.toString()` 
converts an array to a comma-separated list of values

### `array.join(separator)` 
acts similarly to `toString()` (converts array into a string of values) but allows you to specify the separator

### `array.pop()`
removes the last element from an array

### `array.push(element)`
adds a new element to an array (to the end)

### `array.shift()`
removes the first element and *shifts* all other elements to a lower index

### `array.unshift(element)`
adds a new element to the beginning of the array. It will return the new length of the list.

### `array.length()`
returns the length of an array. It can also be used to append a new element to an array.

```js
array[array.length] = "Kiwi"
```

### `delete`
a JavaScript operator can be used on arrays (since arrays are objects) to delete elements

```js
delete array[0]
// changes the first element in array to undefined
// using delete may leave undefined holes in the array - use pop and shift instead
```

### `array.splice(positionToAdd, howManyToRemove, element(s))`
a "multi-purpose" method - can be used to add and remove elements (can also remove elements without leaving holes in the array)

```js
// removing without holes
array.splice(0,1) // removes first element
```

### `array.concat(array)`
merges arrays together

```js
// two arrays
arrayOne.concat(arrayTwo)
// three arrays
arrayOne.concat(arrayTwo, arrayThree)
// merging array with values
arrayOne.concat("value")
```

Visit W3Schools for more information on array methods and a complete list of array methods.

## Sorting

1. sort()
2. reverse()

## Iterating

1. array.forEach()
2. array.map()
3. array.filter()
4. array.reduce()
5. array.reduceRight()
6. array.every()
7. array.some()
8. array.indexOf()
9. array.lastIndexOf()
10. array.find()
11. array.findIndex()

### Resources
- [W3Schools: Arrays](https://www.w3schools.com/js/js_arrays.asp)
- [W3Schools: Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
