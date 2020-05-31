# Web Storage API

The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies. (MDN)

## Two Mechanisms/Properties

1. `sessionStorage`
   1. provides a storage area for data that is available for the duration of a **session** (until browser/tab is closed)
   2. this data is not transferred to the server
   3. 5MB storage limit (larger than cookies)
   4. 
2. `localStorage`
   1. provides a storage area for data that is available EVEN AFTER a session ends - no expiration date.
   2. this information is cleared via JavaScript or by clearing browser cache/locally stored data
   3. 5MB storage limit

# Functionality

By calling the two properties of the Web Storage API, an instance of a storage object is created.

### Resources
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)