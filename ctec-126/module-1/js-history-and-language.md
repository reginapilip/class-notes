# Douglas Crockford: The JavaScript Programming Language

## History/Background

- The history of JavaScript isn't great, but that doesn't mean it's a bad language
  - Don't learn JavaScript from books 
- DOM is a hostile programming environment
- People wanted to add interactivity to browsers; Java was too heavy for browsers; the need for a light scripting language was born (which led to JavaScript)
  - JavaScript is not a subset of Java

## Key Ideas of JavaScript
- Load and go delivery 
  - delivered as text
- Loose typing 
  - overwriting benefits
- Objects as general containers
  - objects are dynamic
- Prototypal inheritance
  - objects inherit directly from other objects (no classes)
- Lambda
  - use of functions as first class objects
- Linkage through global variables
  - not great


## JavaScript Fundamentals

**Numbers**
- one number type - number 
  - be careful as it may not behave as you would expect ($)
  - 0.1 + 0.2 != 0.3
  - NaN - toxic, not equal to anything, "not a number", though it is type number
- Number(value) 
  - converts to a number
  - returns NaN if it cannot be converted to number
- ParseInt(value, 10)
- No UTF-16 bc it was created before that

**Strings**
- char is just a short string of 1 
- strings are immutable (can't change)

**Booleans**
- Falsy values
  - false
  - null
  - undefined
  - "" (empty string)
  - 0
  - NaN
- Truthy values
  - all other values (including all objects) that are not defined as falsy

**Objects (everything else is an object)**
- Unification of Objects and Hash tables
- new Object ()
- members can be accessed with dot notation or subscript notation

**Other notes**
- Functions can be values