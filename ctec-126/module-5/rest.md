# REST

**RE**presentation
**S**tate
**T**ransfer

- REST is an architectural style, or design pattern for APIs
- A set of constraints that allow for clients to create, read, update, and delete resources provided by a server
- A server responds to a CRUD request in a *standard* way
- All server URLs are treated as access points for the various resources on the server.
- "A RESTful web application exposes information about itself in the form of information about its resources. It also enables the client to take actions on those resources, such as create new resources (i.e. create a new user) or change existing resources (i.e. edit a post).
In order for your APIs to be RESTful, you have to follow a set of constraints when you write them. The REST set of constraints will make your APIs easier to use and also easier to discover, meaning a developer who is just starting to use your APIs will have an easier time learning how to do so." (REST: Beginner's Guide)
- "It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource." (REST: Beginner's Guide)
- The representation is often in JSON format, however, it can also be in XML or HTML

## Key Terms

- **Client** data consumer
- **Resource** data provider; data
- **Identifier** the URL you (client) request from the server (resource)
- **HTTP Method** the operation you desire to perform on the requested URL (identifier) - common HTTP Methods are:
  - GET (Read)
    - returns a list of the resource
    - can act on entire resource (URL) or specify an id
  - POST (Create)
    - create a new resource
    - should always act on entire resource
  - PUT (Update)
    - updates resource with a given ID
  - DELETE (Delete)
    - deletes resource with given ID

## 6 REST Constraints

1. **Uniform interface**
   1. Request to server must include a resource identifier
   2. Server's response has enough information for the client to modify the resource
   3. Requests to API contain all the information needed for the server to perform its job; Response from server contains all the information the client needs to understand the response
   4. Hypermedia (hyperlinks, links) as the engine of application state
2. **Client-server separation** the client and server are stand-alone with only requests (from client only) and responses (from server only as a reaction to a request) between them
3. **Stateless** server does not remember anything about the user who uses the API 
4. **Layered System** layered server systems should not interfere with the request-response process
5. **Cacheable** server provides a version number for data sent, which allows client to know not to send duplicate requests (that is, if data is cacheable)
6. **Code-on-demand** *optional* ability of server to send code to client (usually in form of a script, when response is in HTML format)

### Resources
- [Web Dev Simplified](https://www.youtube.com/watch?v=6sUbt-Qp6Pg)
- [REST: Beginner's Guide (Part 1)](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)
- [REST: Beginner's Guide (Part 2)](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-2-rest-constraints-129a4b69a582)