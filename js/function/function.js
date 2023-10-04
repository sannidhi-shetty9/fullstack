
// Function Curying:
// Function currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. The result is a chain of functions, where each function returns another function until all the required arguments are collected, and the final result is obtained.
// Currying allows you to partially apply a function, providing some of the arguments upfront and creating a new function that takes the remaining arguments.
if(0){
    // Function that adds two numbers
function add(a, b) {
    return a + b;
  }
  
  // Curried version of the add function
  function curriedAdd(a) {
    return function(b) {
      return a + b;
    };
  }
  
  const add5 = curriedAdd(5);
  console.log(add5(3)); // Output: 8
  
}

// Function Borrowing
// Function borrowing is a technique where a method of one object is borrowed and used on another object. This is achieved by calling a method from one object, but with the context (the value of this) set to another object.
// Function borrowing allows you to reuse methods across objects that have a similar structure or functionality, without having to duplicate the method's code.

if(0) {
    const person1 = {
        name: 'Alice',
        sayHello: function() {
          console.log(`Hello, my name is ${this.name}`);
        }
      };
      
      const person2 = {
        name: 'Bob'
      };
      
      person1.sayHello(); // Output: "Hello, my name is Alice"
      
      // Borrowing the sayHello method from person1 and using it on person2
      person1.sayHello.call(person2); // Output: "Hello, my name is Bob"
      
    //   We use the call method to borrow the sayHello method from person1 and call it on person2. By setting this to person2, the method effectively behaves as if it were a method of person2, and it prints "Hello, my name is Bob."
}


// Call
// used to call a function with a specified this value (excution context) and arguments provided individually 

// syntax:
// function.call(thisArg, arg1, arg2, ..., argN)

// . function: The function to be called.
// . thisArg: The value to be passed as the this value within the function when it is called. This argument is optional. If you pass null or undefined, the global object (window in browsers) will be used as the this value.
// . arg1, arg2, ..., argN: The arguments to be passed to the function individually.

if(0) {
    global.name = "Bob";
    const person = {
        name: 'John',
        // sayHello: function(greeting) {
        //   console.log(`${greeting}, my name is ${this.name}`);
        // }
      };
      
      const otherPerson = {
        name: 'Alice'
      };
      
      person.sayHello('Hi'); // Output: "Hi, my name is John"
      
      // Using 'call' to invoke 'sayHello' method with a different 'this' value
      person.sayHello.call(otherPerson, 'Hello'); // Output: "Hello, my name is Alice"
      person.sayHello.call(null, 'Hello'); // Output: "Hello, my name is Bob"

    //   By using call(), we invoke the sayHello method with the otherPerson object as the this value. The first argument to call() is the object to be used as this, and the subsequent arguments are the individual arguments to be passed to the function.
}

// Apply
// allows you to call a function with a specified this value and arguments provided as an array (or an array-like object).

// syntax:
// function.apply(thisArg, [argsArray])
// . function: The function to be called.
// . thisArg: The value to be passed as the this value within the function when it is called. This argument is optional. If you pass null or undefined, the global object (window in browsers) will be used as the this value.
// . argsArray: An optional array (or array-like object) containing the arguments to be passed to the function.

if(0) {

    const person = {
        name: 'John',
        sayHello: function(greeting) {
          console.log(`${greeting}, my name is ${this.name}`);
        }
      };
      
      const otherPerson = {
        name: 'Alice'
      };
      
      person.sayHello('Hi'); // Output: "Hi, my name is John"
      
      // Using 'apply' to invoke 'sayHello' method with a different 'this' value and arguments
      const args = ['Hello'];
      person.sayHello.apply(otherPerson, args); // Output: "Hello, my name is Alice"
    
    //   By using apply(), we invoke the sayHello method with the otherPerson object as the this value, and we provide the arguments as an array (args).
}

// bind
// creates a new function that, when called, has a specified this value and can also bind specific arguments to the function.

// syntax:
// function.bind(thisArg[, arg1[, arg2[, ...]]])

// . function: The function to be bound.
// . thisArg: The value to be passed as the this value within the function when it is called. This argument is mandatory and cannot be omitted.
// . arg1, arg2, ...:Optional arguments that can be bound to the function. These arguments will be fixed as the initial arguments when the new function is called later.

if(0) {
    const person = {
        name: 'John',
        sayHello: function(greeting, greet2="") {
          console.log(`${greeting}, my name is ${this.name}, ${greet2}`);
        }
      };
      
      const otherPerson = {
        name: 'Alice'
      };
      
      person.sayHello('Hi'); // Output: "Hi, my name is John"
      
      // Using 'bind' to create a new function with a different 'this' value and fixed argument
      const greetAlice = person.sayHello.bind(otherPerson, 'Hello');
      greetAlice("how are you?"); // Output: "Hello, my name is Alice, how are you?"

    //   By using bind(), we create a new function greetAlice that will always be called with otherPerson as the this value and 'Hello' as the fixed argument. When we call greetAlice(), it prints "Hello, my name is Alice."

    // if we pass null as first arg,  the this value inside the bound function will be determined by the usual rules of function invocation.

}

if(1) {
  // Generator function
  function* myGenerator() {
    let i=0;
    for(i=0; i<10;i++) {
      yield i;
    }
  }

  const gen = myGenerator();
  for(i=0; i<10; i++) {
    console.log(gen.next().value)
  }
}


