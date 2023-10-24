Here's an example of a JavaScript closure:

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer function";
  
  function innerFunction() {
    console.log(outerVariable); // inner function can access the outer variable
  }
  
  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // This will log "I am from the outer function" even though outerFunction has already returned.
```

In this example, `innerFunction` is a closure because it can access the `outerVariable` from its containing scope, even after `outerFunction` has finished executing. When you call `closureExample()`, it still has access to the `outerVariable` due to the closure, and it logs the value of `outerVariable`.



----------
Any variable declared without using a keyword (i.e not using let, cont or var) will be a global variable

(function() {
  var a = b = 10;
})()

console.log('a:', typeof a,  'b: ', b);

The code you provided will result in `a` being `undefined`, and `b` being `10`.
Here's an explanation of what's happening:
1. Inside the immediately-invoked function expression (IIFE), a variable `a` is declared with the value of `b`, which is also declared without the `var`, `let`, or `const` keyword. This means that `a` is scoped to the IIFE, while `b` becomes a global variable.
2. `a` is scoped to the IIFE, so it's not accessible outside of it.
3. `b` becomes a global variable because it was not declared with `var`, `let`, or `const`. This means it's accessible outside of the IIFE.
When you try to log the values of `a` and `b` outside the IIFE:
- `a` is undefined because it's scoped to the IIFE and cannot be accessed outside of it.
- `b` is 10 because it became a global variable, so you can access it outside of the IIFE.
Here's the corrected log statement to display the values:
```javascript
console.log('b:', typeof b, 'b: ', b);
```
This will log "b: number b: 10", indicating that `b` is a global variable with the value 10.




-----------
if([] === []) {
  console.log('same')
} else {
  console.log('different')
}

In JavaScript, when you compare two empty arrays using the strict equality operator (`===`), they will be considered as different objects, and the result will be `'different'`. This is because the strict equality operator checks for the equality of object references, and in this case, you have two distinct array objects, even though they have the same content (empty arrays).
Here's the code with the correct output:
```javascript
if ([] === []) {
  console.log('same');
} else {
  console.log('different'); // This will be executed, and it will log 'different'.
}
```
To compare the content of arrays, you would need to iterate through them and compare their elements. If you want to compare the content of two arrays for equality, you can do something like this:
```javascript
const array1 = [];
const array2 = [];
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
if (arraysAreEqual(array1, array2)) {
  console.log('same');
} else {
  console.log('different'); // This will be executed if the arrays have different contents.
}
```


