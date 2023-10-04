// In JavaScript, the this keyword refers to the object that is currently executing the code or the object that a method belongs to. The value of this is determined dynamically at runtime based on how a function is called or how an object's method is invoked.

// The behavior of this depends on the context in which it is used. Here are some common use cases of the this keyword in JavaScript:

// 1. Method Invocation:
//     When a function is invoked as a method of an object, this refers to the object itself. It allows the method to access and operate on the object's properties and methods.
// 2. Function Invocation:
//     When a function is invoked as a standalone function (not as a method), this refers to the global object (window object in a browser or global object in Node.js) in non-strict mode. In strict mode, this is undefined.
// 3. Constructor Invocation:
//     When a function is used as a constructor with the new keyword, this refers to the newly created object that is being constructed. The constructor function initializes properties and methods on this object.
// 4. Event Handlers:
//     In event handler functions, such as those attached to DOM events, this typically refers to the element that triggered the event.
// 5. Arrow Functions:
//     Arrow functions behave differently with regard to this. They do not bind their own this value but inherit the this value from the enclosing lexical context.

if(1){
    console.log(this); // this => Window , in browser refers to global object (Window object) // global in Node.js.
}
if(0){
    // this inside an object refers to the object
    let name = "Ajith";
    let person = {
        name: 'max',
        name2: this,
        printName: function() {
            console.log('person name is: ', this.name) // this.name => person.name => max
            console.log('name is: ', name) // name => Ajith
            console.log(this.name2); // Window (global object)
            console.log(this) // this => person
        },
        printName2: () => {
            console.log('person name is: ', this.name) // this.name => Window.name => max
            console.log('name is: ', name) // name => Ajith
            console.log(this.name2); // undefined
            console.log(this) // this => Window (global object)
        }
    }
    // person.printName();
    person.printName2();
    console.log('name is: ', name)
}


if(0) {
    let name = "Ajith"
     // cannot create a constructor function using arrow function
    // let Person = (name) => {
    //     this.name = name;
    //     console.log(this)
    // }

    //  // constructor function
    //  let Person = function(name) {
    //     this.name = name;
    //     console.log(this)
    // }

    // constructor function
    function Person(name) {
        this.name = name;
        console.log(this) // this refers to the person object
    }


    // adding method to person class
    Person.prototype.printName = function() {
        console.log('person name is: ', this.name) // this.name => person.name => max
        console.log('name is: ', name) // name => Ajith
        console.log(this)
    }

    Person.prototype.printName2 = () => {
        console.log('person name is: ', this.name) // this.name => Widnow.name => max
        console.log('name is: ', name) // name => Ajith
        console.log(this) // this => Window
    }

    let person = new Person("Ajay"); 
    person.printName2();
    
}

if(0) {

    let name = "xxx";

    class Person{
        name = "hello";

        constructor(name) {
            this.name = name;
        }

        printName = function() {
            console.log('person name is: ', this.name) // this.name => person.name => max
            console.log('name is: ', name) // name =>  xxx
            console.log(this)
        }

        printName2 = () => {
            console.log('person name is: ', this.name) // this.name => person.name => max
            console.log('name is: ', name) // name => xxx
            console.log(this) // this => person object
        }
    }

    let person = new Person("Ajay"); 
    person.printName2();
}