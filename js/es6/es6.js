// "use strict";

// ES stands for ECMAScript. ECMAScript is a scripting language specification standardized by ECMA International. It is the official name for the standard that defines the syntax, semantics, and behavior of the scripting language that we commonly refer to as JavaScript.

if(0) {
    f1();
    // f2(); // gives error - f2 is undefined

    // declaring function f1
    function f1() {
        // var x;
        // z= 10;
        // console.log(z);
        {
            console.log(x);// var is hoisted, hence prints undefined, since declaration happens in the next line
            // console.log(y); // let is not hoisted, hence not defined yet, gives cannot access error
            var x = 2; // 
            let y = 4;
            // const b; // missing intializer error
            const a = 10;
            // a = 10; // assignment to constant variable error
        }
        console.log(x)  // prints 2, since x is function scoped
        // console.log(y) // y is not defined error, since let is block scoped
        console.log(`f1 this: ${this}`)
        
    }

    // function expression and assigning  it to f2
    var f2 = function () {
        console.log(`\n-------------- \n f2 this: ${this}`)
        console.log(this)
    };

    var f3 = () => {
        console.log(`\n ------------\n f3 this: ${this}`)
        // console.log(this)
        

    };

    f2();
    f3();
    console.log('\n----------- \n this:', this)
}

// console.log(this)

// f3();

// var f4 = () => {
//     console.log(`\n ------------\n f4 this: ${this}`)
//     console.log(this)
    

// };
// f4();

if(0) {

    let print = (value="hello", i) => console.log(value, i)
    print() // hello undefined
    print("hi!", 5)  // hi 5
}

if(0) {
    let add = (x,...y) => {
        let sum = x;
        y.forEach(val => sum += val)
        console.log(x,y, sum);
        return sum;
    }

    add(1)
    add(1, 2, 3)

}

if(0) {
    let add = (x,y) => x+y; // {return x+y}
}

if(0) {
    // IIFE 
    (function (){
        console.log("I am an IIFE");
    })();
}

if(0) {
    // concise function
    let inc = x => x+1; // (x) => {return x+1;}
    console.log(inc(10));
}

if(0){
    // set interval
    let x = 0;

    let id = setInterval((s)=>{
        console.log(x=x+s);
    }, 1000, 2);
    console.log('id: ', id);
    setTimeout(()=> clearInterval(id), 5000);
}

if(1) {
    // debugger
    console.log("start");
    debugger;
    console.log("end");
}