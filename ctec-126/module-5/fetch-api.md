# Information on Using Fetch

A JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

Provides a global fetch() method that makes it easy to fetch resources asynchronously across the network.

```js
// a basic fetch request
// first line fetches JSON file, which is an HTTP response
fetch('http://example.com/movies.json')
    // extracts JSON body content from response
  .then(response => response.json())
  .then(data => console.log(data))
```

### Resources:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Web Dev Simplified](https://www.youtube.com/watch?v=cuEtnrL9-H0)
