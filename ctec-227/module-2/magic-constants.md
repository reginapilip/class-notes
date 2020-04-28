# Module Notes

[PHP Docs - Magic Constants](https://www.php.net/manual/en/language.constants.predefined.php)

## Definition

**Magic Constants**
- pre-defined constants that can be added to any script
- many of which are created by and subject to various extensions (will only be present if extensions are present).
- They *change* depending on where they are used. 
- Resolved at compile time, unlike regular constants, which are resolved at runtime
- Case sensitive

**Nine Magical Constants**
1. `__LINE__` current line number of a file
2. `__FILE__` full path and filename of file
3. `__DIR__` directory of a file; equivalent to `dirname(__FILE__)`
4. `__FUNCTION__` function name or {closure} for anonymous functions
5. `__CLASS__` the class name (includes namespace)
6. `__TRAIT__` the trait name (includes namespace)
7. `__METHOD__` the class method name
8. `__NAMESPACE__` the name of current namespace
9. `ClassName::class` the fully qualified class name 



# In-class Notes