if (0) {
  // Object using class
  class Animal {
    //  constructor is a special method that is invoked when a new instance of a class is created using the new keyword. The constructor method is used to initialize the object and set its initial state.
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`The ${this.name} makes a sound.`);
    }
  }

  // class inheritance allows one class to inherit properties and methods from another class, forming a hierarchical relationship.class inheritance is implemented using the extends keyword.

  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }

    speak() {
      // super.speak()
      console.log(`The ${this.breed} dog named ${this.name} barks.`);
    }
  }

  const dog = new Dog("Max", "Labrador");
  dog.speak(); // Output: The Labrador dog named Max barks.
}

if (0) {
  // object using prototype
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    console.log(`The ${this.name} makes a sound.`);
  };

  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }

  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  Dog.prototype.speak = function () {
    console.log(`The ${this.breed} dog named ${this.name} barks.`);
  };

  const dog = new Dog("Max", "Labrador");
  dog.speak(); // Output: The Labrador dog named Max barks.
}

// working of class under the hood-

//   1.Class Definition:
// When you define a class using the class keyword, it is primarily a syntactic construct that simplifies the process of creating constructor functions and managing prototypes.
// The class definition is evaluated and processed by the JavaScript engine at runtime.

// 2.Constructor Function:
// The constructor function is defined within the class using the constructor method. It is responsible for initializing instances of the class.
// When a new object is created using the new keyword with the class, the constructor function is invoked to initialize the object.
// The constructor function can be seen as a special method within the class that gets executed when creating new instances.

// 3.Class Methods:
// Methods defined within the class are stored on the class's prototype object, similar to how methods are added to the prototype of constructor functions.
// Each instance created from the class shares the same set of methods defined in the class's prototype.

// 4.Prototype Chain:
// JavaScript sets up a prototype chain for class inheritance, similar to the prototype chain used in the traditional prototype-based system.
// The prototype of a class is assigned to the prototype property of the constructor function associated with the class.
// When a method or property is accessed on an instance of a class, JavaScript first checks if the instance itself has that property or method. If not found, it looks up the prototype chain to find it in the prototype object of the class.

if (0) {
  // JS prototype
  // in JavaScript, the prototype property is a mechanism that allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype property that references another object, which is often referred to as the object's prototype.

  // When you access a property or method on an object, JavaScript first checks if the property or method exists directly on the object itself. If it doesn't find the property or method, it looks up the prototype chain to find it in the object's prototype and its parent prototypes.

  // The prototype property is primarily used in combination with constructor functions or classes to implement inheritance and share behavior between objects. Here's an example to illustrate the use of the prototype property:

  // Constructor function
  function Person(name) {
    this.name = name;
  }

  // Adding a method to the prototype of Person
  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };

  // Creating instances of Person
  const person1 = new Person("John");
  const person2 = new Person("Jane");

  person1.sayHello(); // Output: Hello, my name is John.
  person2.sayHello(); // Output: Hello, my name is Jane.
}

if (0) {
  // prototype inheritance
  // Parent object
  const animal = {
    sound: "Animal sound",
    makeSound() {
      console.log(this.sound);
    },
  };

  // Child object inheriting from the parent object
  const dog = Object.create(animal);
  dog.sound = "Woof!";

  dog.makeSound(); // Output: Woof!
}

if (0) {
  // Classes and prototypes
  // Prototypes:

  // JavaScript is based on a prototype-based inheritance model, where objects inherit properties and methods from other objects.
  // Every object in JavaScript has an internal property called [[Prototype]] (also accessible as __proto__ in some environments) that references its prototype object.
  // Prototype objects can have properties and methods, and when a property or method is accessed on an object, JavaScript looks for it in the object itself and then follows the prototype chain until it finds the property or method.
  // Prototypes can be created using constructor functions, object literals, or the Object.create() method.
  // Classes:

  // Classes are a more recent addition to JavaScript, introduced in ECMAScript 2015 (ES6), and provide a syntax similar to class-based languages.
  // Classes provide a more structured and syntactic sugar way to define objects and their behavior, including inheritance, encapsulation, and member methods.
  // Under the hood, JavaScript classes still use prototypes for inheritance, with each class having a prototype object associated with it.
  // Class methods are defined on the class's prototype object, and when an instance of a class is created, it inherits the methods from its class's prototype.
  // Classes can have constructors to initialize objects and support the use of the super keyword for calling parent class constructors and methods.

  // Prototypes
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };

  const person = new Person("John");
  person.sayHello(); // Output: Hello, my name is John.

  // Classes
  class Animal {
    constructor(name) {
      this.name = name;
    }

    sayName() {
      console.log(`My name is ${this.name}.`);
    }
  }

  const animal = new Animal("Leo");
  animal.sayName(); // Output: My name is Leo.
}

if (0) {
  // prototype: The prototype property is a property of constructor functions and classes. It is an object that serves as the template or blueprint for creating new objects using the new keyword. It defines the shared properties and methods that will be inherited by instances of the constructor or class.

  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };

  const person = new Person("John");
  person.sayHello(); // Output: Hello, my name is John.
}

if (0) {
  // __proto__: The __proto__ property is an internal property of objects that represents the object's prototype. It is a reference to the prototype object from which the object directly inherits its properties and methods.

  let person = { name: "John" };
  console.log(person.__proto__); // Output: {}

  let array = [];
  console.log(array.__proto__); // Output: []

  // In this example, person.__proto__ and array.__proto__ reference the prototype objects of person and array, respectively. The __proto__ property provides access to the prototype object of an instance.

  // It's worth noting that __proto__ is an older, non-standard property that is still widely supported for accessing an object's prototype. However, for better compatibility and standard compliance, it is recommended to use the Object.getPrototypeOf() method to access an object's prototype:

  person = { name: "John" };
  console.log(Object.getPrototypeOf(person)); // Output: {}

  array = [];
  console.log(Object.getPrototypeOf(array)); // Output: []

  // In this example, Object.getPrototypeOf() is used to access the prototype objects of person and array.

  // To summarize, the prototype property is used in constructor functions or classes to define shared properties and methods that will be inherited by instances. On the other hand, __proto__ (or Object.getPrototypeOf()) is an internal property of objects that provides access to the object's prototype, allowing for prototype chain traversal and inheritance.
}

if (0) {
  // Object keyword is a built-in global object that serves as the base object for all objects in JavaScript. It is a constructor function that can be used to create new objects or manipulate existing objects in various ways.

  const person = {
    name: "John",
    age: 30,
  };

  console.log(Object.keys(person)); // Output: ["name", "age"]
  console.log(Object.values(person)); // Output: ["John", 30]

  const newObj = Object.assign({}, person, { occupation: "Engineer" });
  console.log(newObj); // Output: { name: "John", age: 30, occupation: "Engineer" }

  //       In this example, we create an object person using an object literal. We then use Object.keys() to retrieve an array of property names, and Object.values() to retrieve an array of property values from the person object.

  // We also use Object.assign() to create a new object newObj by merging the properties of person with an additional occupation property.

  // The Object keyword provides a variety of methods and functionalities for working with objects in JavaScript, allowing you to manipulate and interact with objects in different ways based on your needs.
}

if(1) {
  class Animal {
    print() {
      console.log("this is Animal!")
    }
  }

  class Dog extends Animal {
    print() {
      // super.print()
      console.log("this is Dog!")
    }

    getSuperPrint() {
      return super.print;
    }
  }

  let animal = new Animal();
  let dog = new Dog();
  dog.print();
  // dog.getSuperPrint()();
  // dog.print.call(animal);
  
}
