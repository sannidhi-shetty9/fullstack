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


// debounce
const debounce= (fn, delay) => {
    let timer = null;
    
    return (...args) => {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    } 
}

const testFn = (val) => {
    console.log(val)
}

const debouncedFn = debounce(testFn, 1000)

debouncedFn(1)
debouncedFn(2)



// custom hook - get request
const useGet = (url) => {
    
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError('')
                let response = await fetch(url)
                setLoading(false)
                if(!response.ok){
                    setError('Fetch Failed')
                } else {
                    res = await response.json()
                    setData(res)
                }
            }  catch (err) {
                setLoading(false)
                setError('Fetch Failed')
            }      
            
        }
    }, [url])
    
    
    return {data, loading, error}
}




const App = ({url}) => {
    const {data, error, loading} = useGet(url)
    
    return <div></div>
}



// flat array
const flat2 = (arr) => {
    let res = []
    arr.forEach(item => {
        if(!Array.isArray(item)){
            res = res.concat(item)
        } else {
        res = res.concat(flat(item))
        }
        })
        return res
}

const flat = (arr) => arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flat(item) : item), [])

const arr1 = [[7,8], 1, [2, [3, 4]], [5], 6]
const arr2 = flat(arr1)
console.log(arr2)


-----

// flat object
const flato = (obj) => {
    let res = {}
    Object.keys(obj).forEach(item => {
        if(!(typeof(obj[item]) === "object")){
            res = {...res, [item]: obj[item]}
        } else {
            res = {...res, ...flato(obj[item])}
        }
        })
        return res
}


const obj1 = {a: {aa: 7, ab: 8}, b: 1, c: {ca: 2, cb: {cba: 3, cbb: 4}}, d: {da: 5}, e: 6}
const obj2 = flato(obj1)
console.log(obj2)

----
// find missing number
const nums = [9,6,4,2,3,5,7,0,1]

const n = 9

let op = null
for(let i=0; i<=n; i++) {
    console.log(i, nums.findIndex(item => item === i))
    if(nums.findIndex(item => item === i) < 0) {
        op = i;
        break;
    }
}

console.log(op)

--
const duplicateArray = [4,5,7,4,7,9,"a","c","","null","a","d","c"]

const remDup = (arr) => {
    let obj = {}
    arr.forEach(item => {
        if(item === "" || item === "null"){
            return;
        }
        obj[item] = true;
    })
    return Object.keys(obj)
}

let res = remDup(duplicateArray)
console.log(res)

---

collapsible list

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Collapsible List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .collapsible {
            background-color: #f1f1f1;
            color: #444;
            cursor: pointer;
            padding: 10px;
            border: none;
            text-align: left;
            outline: none;
            font-size: 16px;
            width: 100%;
            border-radius: 5px;
            margin-bottom: 5px;
        }
        .collapsible:hover {
            background-color: #ddd;
        }
        .content {
            padding: 0 15px;
            display: none;
            overflow: hidden;
            background-color: #f9f9f9;
            border-left: 2px solid #ccc;
            border-radius: 0 0 5px 5px;
        }
        .content ul {
            list-style-type: disc;
            margin: 10px 0;
            padding-left: 20px;
        }
        
        .hide {
        	display: none
        }
        
        .cnt {
        
        }
        
        .cnt2 {
        	margin: 10px;
            background-color: lightblue;
            border: 1px solid black;
        }
        
        .cnt2 > .hd {
        	background-color: red;
        }
        
        .bd {
        	
            padding-left: 10px;
        }
        
        .bd > div {
        	background-color: null;
        	padding: 5px;
        }
        
        
    </style>
</head>
<body>



<div class="cnt"></div>

<script>
    const data = [
        { title: "Title 1", points: ["Point 1.1", "Point 1.2", "Point 1.3"] },
        { title: "Title 2", points: ["Point 2.1", "Point 2.2", "Point 2.3"] },
        { title: "Title 3", points: ["Point 3.1", "Point 3.2", "Point 3.3"] }
    ];
    
    const cnt = document.querySelector(".cnt")
    cnt.textContent = "hello"
    
    data.forEach(item => {
    	const cnt2 = document.createElement('div')
        cnt2.classList.add('cnt2')
        const hd = document.createElement('div')
        hd.textContent = item.title
        hd.classList.add('hd')
        cnt2.appendChild(hd)
        const bd = document.createElement('div')
        bd.classList.add('bd', 'hide')
        item.points.forEach(point => {
        	const pt = document.createElement('div')
            pt.textContent = point
            bd.appendChild(pt)
        })
        cnt2.appendChild(bd)
        
        cnt2.addEventListener('click', () => {
        bd.classList.toggle('hide')
        })
        cnt.appendChild(cnt2)
    
    })

    
</script>

</body>
</html>



-----



<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
.cnt {
width: 100%;
height: 1000vh;
border: 1px solid red;
}
.btn {
background-color: lightblue;
}

.btn:hover {
background-color: black;
color: white;
}
</style>
</head>
<body>

<div class="cnt">
<button class="btn">click</button>
</div>

</body>
</html>


-----



let fn = (val) => {return () => console.log(val)}

let microTaskQueue = [fn("mi1"), fn("mi2")]

let macroTaskQueue = [fn("ma1"), fn("ma2")]

let callStack = []

// call stack
let eventLoop = () => {
    while(1) {
        if(callStack.length){
            item = callStack.pop();
           item()
            continue;
        }
        if(microTaskQueue.length) {
            callStack.push(microTaskQueue.shift())
        } else  if(macroTaskQueue.length) {
            callStack.push(macroTaskQueue.shift())
        } else {
            break;
        }
    }
}

// executor
let executor = () => {
    while(callStack.length || microTaskQueue.length || macroTaskQueue.length){
        if(callStack.length) {
           item = callStack.pop();
           item()
        }
    }
}


// executor();
eventLoop();

---

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    
     (function(i){  
  setTimeout(
      function() {
     console.log('Index: ' + i + ', element: ' + arr[i]);
  }
  , 3000);
     })()

}


---

* Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.
* For example, for the input [1, 2, 3, 10], you should return 7.
* Do this in O(N) time.


let arr1 = [1, 2, 3, 10],

let sumArr= []

for(i=0; i< arr.length; i++) {
    if(!sumArr.length) {
        sumArr = arr1[i]
    } else {
        sumArr.push(sumArr[i-1] + arr[i])
    }
    
    if(i !== arr)
}


----

x = 3;
console.log(x); //prints 3
var x;

----

function curry(fn, arg){
    const n = fn.length
    let c = 0;
    let newFn = fn
    return (arg) => {
        console.log(n, c)
        c++;
        if(c< n) {
        return newFn.bind(null, arg)
        } else {
            return newFn(arg)
        }
    }
}

function multiply(a,b,c){
    return a*b*c
}

const curriedMultiply=curry(multiply)
console.log('curriedMultiptly: ', curriedMultiply)
curriedMultiply(1)(2)(5)
curriedMultiply(1)(2)

---

var expect = function(val) {
    return {
        toBe: function(arg) {
            if (val === arg) return {"value":true}
            console.log('--')
            return {"error": "Not Equal"}
        },
        notToBe: function(arg) {
            if (val !== arg) return {"value":true}
            return {"error": "Not Equal"}
        }
    }
}

let res = expect(5).toBe(5)
console.log(res)
console.log(expect(5).toBe(null))
console.log(expect(5).notToBe(null))


----
Example 1:
Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
 
Example 2:
 
Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
 
 
Example 3:
 
Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.


-----
function memoize(fn) {
    const cache = {}
    return function(...args) {
        const inp = String(args)
       console.log(inp, cache)
       if(cache[inp]) {
           return cache[inp]
       } else {
           cache[inp] = fn(...args)
           return cache[inp]
       }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
  })
  memoizedFn(2, 3) // 5
  memoizedFn(2, 3) // 5
  console.log(callCount) // 1




----
let arr = [ 3, 5,  2, 3, 2, 1]

const  unique = (arr) => {
    let obj = {}
    arr.forEach(item => {
        obj[item]= true;
    })
    return Object.keys(obj)
}

// let res = unique(arr)

const secLarge = (arr) => {
    let largest = arr[0];
    let sec = arr[0];
    arr.forEach(item => {
        if(item > largest) {
            sec = largest;
            largest = item
        }
    })
    
    return sec;
}

let res = secLarge(arr)

console.log(res)


----------------
find the lest no of switches to group the element smaller than b
A= [1, 12, 10, 3, 14, 10, 5]
B = 8

// const group = (arr, val) => {
//     const newArr = []
//     arr.forEach(item => {
//         if(item <val) {
//             newArr.unshift(item)
//         } else {
//             newArr.push(item)
//         }
//     })
    
//     return newArr
// }


const group = (arr, val) => {
    let p1 = 0;
    let p2 = 1;
    let count =0;
}

const newArr = group(A, B)
console.log(newArr)

---------







