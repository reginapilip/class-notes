# PHP Sessions and Cookies

## Useful Links
- [**PHP.net Session Documentation**](https://www.php.net/manual/en/book.session.php "PHP Manual on Sessions")
- [**W3Schools PHP Sessions**](https://www.w3schools.com/php/php_sessions.asp "W3Cschools on Sessions")

## Intro to Sessions and **Cookies**

### Cookies

**$_COOKIE** saves user info on the client-side (browser). A mechanism for storing data in the remote browser and thus tracking or identifying returning users. 

It is part of the HTTP header, so it must be called *before* any output (e.g. HMTL) is sent to the browser.

Any cookies sent to the server from the client will automatically be included in a $_COOKIE auto-global array.
- less secure; info saved in accessible areas
- used for non-sensitive information
- EXAMPLE: saving favorites on shopping sites
- cookies can have set time-limits (not bound to browser closing)

``` php
setcookie()
setrawcookie()

setcookie("name", "value", "expire");
setcookie("name", "Daniel", time() + 86400);
// time() - gets current time
// seconds * minutes * hours * daysinweek

// print_r() - gets human readable info on a variable
// header_list() - returns contents of header

// destroying cookies
...time() - 1 
```

### Sessions

**$_SESSION** saves user info on the server-side (server)
- more secure; 
- EXAMPLE: used to remember user login information to prevent a "logout" as new pages are accessed
- session ends at the close of the browser

``` php
$_SESSION['username'] = "dani948a";
```

**Starting a session**

``` php
session_start();
```

This allows for the browser to remember the set $_SESSION variables. This code needs to be on every page so that each page has a session started (It must come before any HTML whatsoever including the doctype). 

```
Note: you can use include files and have that code saved in a header.inc.php page and included on each page using the include/require statement
```

**Setting a Session Variable**

To set the session variable 'monkey' to the value of 'George':

```php
$_SESSION['monkey'] = "George";
```

**To Read/Use a Session Variable**

```php
echo "<p>The value of the monkey session variable is: </p>" . $_SESSION['monkey'];
```

**To Unset a Session Variable**

```php 
unset('monkey');
```

**To Destroy a User's Session (all session variables)**

```php
session_destroy();
```

## Class Notes

To see cookies/sessions

- Web Developer Tools >> Applications tab
  
**Superglobals**
Associative arrays of key/value pairs
- $_GET
- $_POST
- $_SERVER
- $_SESSION

### Branching

**ALWAYS commit changes when switching between branches (or you're playing with fire)**

You can have multiple branches active

1. Command pallette
2. Git Branch (create one)
3. Name it
4. Work on it

Merging

1. Command pallette
2. Git Merge
3. Select branch to merge
4. Merge happens
5. Merges don't delete a branch - it still exists unless you delete it.
6. To delete: command pallette + git delete branch (don't be in the branch you're trying to delete!)



