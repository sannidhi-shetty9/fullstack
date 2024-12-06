import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

const input = 'thisIsATest';

let output = '';

for (let i = 1; i < input.length; i++) {
  let ch = input[i];
  if (ch == ch.toUpperCase()) {
    ch = '_' + ch;
  }
  output = output + ch;
}
output = input[0].toUpperCase() + output;
console.log(output);

const arr = [1, [2], [3, [4]]];

let isArr = true;
let newArr = [];

while(isArr) {
  isArr = false
  arr.forEach(i => {
    if(Array.isArray(i)) {
      newArr = [...newArr, ...i]
    } else {
      newArr.push(i)
    }
  })
  newArr.forEach((i) => {
    if(Array.isArray(i)) {
      isArr = true
    }
  })

}


// answer

const arr = [1, [2], [3, [4]]];

// Use the flat() method to extract inner arrays
const flattened = arr.flat(Infinity); // Infinity ensures all levels are flattened

console.log(flattened); // Output: [1, 2, 3, 4]


---

const arr = [1, [2], [3, [4]]];

function flattenArray(array) {
  return array.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
  );
}

const flattened = flattenArray(arr);
console.log(flattened); // Output: [1, 2, 3, 4]



-----

console.log(
  '--',
  newArr
)(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a);
  })(1);
})(0);

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

const object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};
console.log(object.greet());
console.log(object.farewell());

try {
  console.log('starting');
  setTimeout(() => {
    console.log('inside setTimeout');
    throw new Exception('error');
  }, 10);
  console.log('just before catch');
} catch (e) {
  console.log('in catch');
}
console.log('outside try');

// starting
// just before catch
// outside try
// inside setTimeout

const promise = new Promise((resolve, reject) => {
  console.log('starting');
  setTimeout(() => {
    console.log('inside setTimeout');
    throw new Exception('error');
  }, 10);
  console.log('just before catch');
});

promise().catch((err) => {
  print('promise er: ', err);
});


https://stackblitz.com/edit/vitejs-vite-fp1z9a?file=src%2Fmain.js&terminal=dev
https://stackblitz.com/edit/vitejs-vite-iwazhe?file=src%2Fmain.jsx,src%2FApp.jsx&terminal=dev



-----


To extract all inner arrays and flatten them to a single-level array, you can use the `flat()` method in JavaScript. Here's how you can do it:

### Code:
```javascript
const arr = [1, [2], [3, [4]]];

// Use the flat() method to extract inner arrays
const flattened = arr.flat(Infinity); // Infinity ensures all levels are flattened

console.log(flattened); // Output: [1, 2, 3, 4]
```

### Explanation:
- `flat(Infinity)` ensures the array is fully flattened regardless of the nesting level.
- If the depth is known, you can specify it explicitly (e.g., `flat(2)` for two levels).

If you want to manually flatten the array without using `flat()`, you can use recursion:

### Recursive Code:
```javascript
const arr = [1, [2], [3, [4]]];

function flattenArray(array) {
  return array.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
  );
}

const flattened = flattenArray(arr);
console.log(flattened); // Output: [1, 2, 3, 4]
```

Both approaches will achieve the desired result!




--

Let's break down the **recursive code** to flatten an array:

### Code:
```javascript
const arr = [1, [2], [3, [4]]];

function flattenArray(array) {
  return array.reduce((acc, val) => 
    Array.isArray(val) 
      ? acc.concat(flattenArray(val)) // Recursively flatten inner arrays
      : acc.concat(val)              // Add non-array elements directly
  , []);
}

const flattened = flattenArray(arr);
console.log(flattened); // Output: [1, 2, 3, 4]
```

---

### Explanation:
#### 1. **The Function:**
- **`flattenArray(array)`** is a function that takes an array as input and flattens it.
- It uses the `reduce()` method, which processes each element of the array step by step.

#### 2. **`reduce()` Method:**
The `reduce()` method works like this:
- **`acc`**: The accumulator, which starts as an empty array (`[]` in this case).
- **`val`**: The current element being processed in the array.

For each element (`val`) in the array:
1. If `val` is an **array** (`Array.isArray(val)`):
   - Call the `flattenArray()` function **recursively** to flatten `val`.
   - Concatenate the flattened result to `acc`.
2. If `val` is **not an array**:
   - Directly concatenate `val` to `acc`.

---

#### 3. **Key Steps in Execution:**
For `const arr = [1, [2], [3, [4]]];`:
1. Start with the first element:
   - `1` is not an array, so add it to `acc`: `acc = [1]`.
2. Move to the second element:
   - `[2]` is an array, so call `flattenArray([2])`.
     - Inside this recursive call, `2` is added to `acc`: `acc = [2]`.
   - Concatenate the result `[2]` to the outer `acc`: `acc = [1, 2]`.
3. Move to the third element:
   - `[3, [4]]` is an array, so call `flattenArray([3, [4]])`.
     - Inside this recursive call:
       - `3` is not an array, so add it to `acc`: `acc = [3]`.
       - `[4]` is an array, so call `flattenArray([4])`.
         - Inside this recursive call, `4` is added to `acc`: `acc = [4]`.
       - Concatenate `[4]` to the inner `acc`: `acc = [3, 4]`.
     - Concatenate `[3, 4]` to the outer `acc`: `acc = [1, 2, 3, 4]`.

---

#### 4. **Base Case:**
The recursion stops when there are no more arrays inside. At this point, the flattened array is returned.

---

#### 5. **Final Output:**
After all recursive calls finish, you get:
```javascript
[1, 2, 3, 4]
```

---

This recursive approach ensures that no matter how deeply nested the arrays are, they will all be flattened!


-----

