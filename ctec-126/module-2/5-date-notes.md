# Slide Deck 5 Notes

## JS Date Object

```js
// gets current date and time
const date = new Date()
```

## Date Methods

- `getHours()` 0-23
- `getMinutes()` 0-59
- `getSeconds()` 0-59

## Constructing a New Date

```js
let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17) // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 3, 24, 0)
```