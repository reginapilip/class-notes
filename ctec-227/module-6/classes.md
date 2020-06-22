# Classes: Properties and Methods

## Key Terms
- **Class** a template from which to make instances of the same kind (or class) of type object.
- **Object** an *instance* of a class.
- **Class vs. Object** a class is a template for objects and an object is an instance of a class. When individual objects are created, they inherit all the properties and behaviors from the class, but each object will have different values and properties. (from W3Schools)
- **Properties** can contain values or methods and "know things" about or describe an object.
- **Methods** define the actions of an object.

```php
    // building a class, or a template for making objects
    class Dog {
        // property declaration
        public $legs = 4;
        public $breed = "German Shepherd";

        // method declaration
        public function getDogInfo() {
            echo "<b>getDogInfo Method:</b><br>";
            echo "The dog has " . $this->legs . " legs and is a " . $this->breed;
            echo "<br>";
        }

        public function setDogInfo($legs=4, $breed="undefined") {
            echo "<b>setDogInfo Method:</b><br>";
            echo "Updated Number of Legs: " . $this->legs = $legs;
            echo "<br>";
            echo "Updated Breed: " . $this->breed = $breed;
        }
    }

    // creates an instance of a class, or an object
    $fido = new Dog();
    // calling member functions
    $fido->getDogInfo();
    $fido->setDogInfo(3,"Chihuahua");
```