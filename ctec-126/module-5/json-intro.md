# JSON: Intro to JavaScript Object Notation

- A data representation format for storing and exchanging data. It is text, written with JavaScript object notation.
- Because data that is exchanged between a browser and a server must be text, JSON is used. 
- Any JavaScript object can be converted to JSON, and vice versa.
  - `JSON.stringify()` converts JS object to JSON (send data, store data) [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
  - `JSON.parse()` converts JSON to JS object (receive data) [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
  - **Deserialization** converting a string to a native object
  - **Serialization** converting a native object to a string
- JSON file extension is `.json`, and it's MIME type is `application/json`
- JSON allows you to construct a data hierarchy using syntax that closely resembles JavaScript object literal syntax
- JSON may be used independently from JavaScript

## Supported Data Types
1. Strings
2. Numbers
3. Booleans
4. null
5. Arrays
6. Objects (key/value pairs)

## Syntax

```json
// user.json
// Web Dev Simplified Video
{
  "name": "Regina",
  "favoriteNumber": 6,
  "isProgrammer": true,
  "hobbies": ["Hiking", "Exercising"],
  "family": [{
    "name": "Olga",
    "favoriteNumber": 4,
    "isProgrammer": false,
    "hobbies": ["Photography", "Arts and Crafts"]
  }]
}
```

## Chaining to Access Nested Data

```js
parent['childObject'][childObjectIndex]['childObjectProperty'][childObjectPropertyIndex]
```

## Accessing JSON Data

`userInfo.name` -> dot notation
`userInfo.["name"] -> bracket notation

## Obtaining JSON using XHR

**XHR** XMLHttpRequest; a JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript (images, text, JSON, even HTML Snippets) (MDN)

### Resources:
- [W3Schools Intro to JSON](https://www.w3schools.com/js/js_json_intro.asp)
- [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [Validating JSON](https://jsonlint.com/)
- [Web Dev Simplified Tutorial](https://www.youtube.com/watch?v=iiADhChRriM)
- [Body.json() Method - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)