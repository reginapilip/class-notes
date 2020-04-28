# Module Notes

Code from [PHP Docs on POST Method to Upload Files](https://www.php.net/manual/en/features.file-upload.post-method.php)

```html
<!-- The data encoding type, enctype, MUST be specified as below -->
<form enctype="multipart/form-data" action="__URL__" method="POST">
    <!-- MAX_FILE_SIZE must precede the file input field -->
    <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
    <!-- Name of input element determines name in $_FILES array -->
    Send this file: <input name="userfile" type="file" />
    <input type="submit" value="Send File" />

    <!-- The __URL__ in the above example should be replaced and point to a PHP file -->
</form>
```


## $_FILES Superglobal

**$_FILES superglobal** contains all the uploaded file information. 


- **$_FILES['file-name']** = this is the value you set your name attribute for the input to upload a file (see line 11 from code snippet)

- **$_FILES['file-name']['name']** the original name of the file on the client machine

- **$_FILES['file-name']['type']** the [mime](https://www.interserver.net/tips/kb/mime-multi-purpose-internet-mail-extensions/) type of the file (if browser provided this info). *Example: image/gif*. This value isn't checked on the PHP side.

- **$_FILES['file-name']['size']** size in bytes of uploaded file.

- **$_FILES['file-name']['tmp_name']** temporary name of file uploaded to be stored on server

- **$_FILES['file-name']['error']** error code associated with this file upload



## Storage

- By default, uploads are stored in server's default temporary directory. 

- To change that, do so in the *upload_tmp_dir* directive in php.ini. 

- *The file will be deleted from the temporary directory at the end of the request if it has not been moved away or renamed.*



## Validating File Uploads

**see docs link above**

Some useful functions:
- is_uploaded_file()
- move_uploaded_file()



## Uploading array of files

Use the [HTML array feature](https://www.php.net/manual/en/faq.html.php#faq.html.arrays) for this

*See notes.html for code on this*


## Error Messages 

[Docs for Error Messages](https://www.php.net/manual/en/features.file-upload.errors.php)

- UPLOAD_ERR_OK, UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE, etc...


# In-class Notes