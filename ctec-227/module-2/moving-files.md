# Functions for Moving Files 

These functions can be used to move a file from one directory to another, 
- `move_uploaded_file()`
- `copy()`
- `rename()`


## `move_uploaded_file`

```php
move_uploaded_file($filename, $destination)
// returns TRUE/FALSE
```

Moves an **uploaded** file to a new location

*Some important things to note*
- This function only works on files that are **valid upload files**, in other words, files that were uploaded via PHP's HTTP POST upload mechanism. This function checks for that and will only work on those types of files.

## `copy()`

```php
copy($source, $destination)
// returns TRUE/FALSE
```

Copies a file, which results in two files. One in the original destination, and the other, in the new destination. This function does not *move* the file, it *copies* it.

If you desire to move a file, use `rename()` (as PHP Docs suggest)

## `rename()`

Renames a file or directory, which can also result in moving of that file. A file will be moved if the rename includes a new destination for that file.

```php
rename($oldname, $newname)
// returns TRUE/FALSE
```
From Docs:
"Attempts to rename `$oldname` to `$newname`, moving it between directories if necessary. If renaming a file and `$newname` exists, it will be overwritten. If renaming a directory and `$newname` exists, this function will emit a warning."


### Some useful resources
- [The difference between `copy()` and `rename()`](https://stackoverflow.com/questions/3924016/php-differences-between-copy-rename-and-move-uploaded-file)
- [PHP Docs on `move_uploaded_file()`](https://www.php.net/manual/en/function.move-uploaded-file.php)
- [PHP Docs on `copy()`](https://www.php.net/manual/en/function.copy.php)
- [PHP Docs on `rename()`](https://www.php.net/manual/en/function.rename.php)

### Warning on these functions
- Warning: If the destination already exists, **it will be overwritten.**
