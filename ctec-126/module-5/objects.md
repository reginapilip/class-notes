# JavaScript Objects

- **Objects** are containers for properties and methods.
- **Properties** can contain values or methods and "know things" about or describe an object.
- **Methods** define the actions of an object.
- Properties of an object are written in **name:value** pairs.

## Defining an Object
```js
// object literal
const person = {
    // property (key/value pair)
    name: "Regina Pilipchuk",
    age: 22,
    address: {
                street: "123 NW 4th Street",
                zip: 98604
            }
}
```

## Accessing Object Properties
```js
// accessing property values
console.log(person.name)
console.log(person.age)

// accessing an object within an object
console.log(person.address.street)

// iterating through objects
for(item in person) {
    console.log(person[item])
}
```

## Deleting Object Properties

```js
// delete object.property
delete person.age
```

## Object Methods
Functions stored as properties

```js
const person = {
    // property (key/value pair)
    firstName: "Regina",
    lastName: "Pilipchuk",
    age: 22,
    address: {
                street: "123 NW 4th Street",
                zip: 98604
            }
    fullName: () => {
        return this.firstName + " " + this.lastName
    }
}

// accessing an object's method
person.fullName()

// constructor function
function Person(first, last, age) {
    this.first = first
    this.last = last
    this.age = age
}

// creating an instance of an object
const regina = new Person('Regina', 'Pilipchuk', 22)
```

## `this` Keyword
- refers to the owner of the function/current object

### Resource:
- [W3Schools: JS Objects](https://www.w3schools.com/js/js_objects.asp)

