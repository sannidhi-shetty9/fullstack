import { useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);

  const [todoInput, setTodoInput] = useState("");

  //  add todo list
  const addTodo = () => {
    if (!todoInput) return;

    setList([...list, { text: todoInput, complete: false }]);
    setTodoInput("");
  };

  const findTodo = (text) => {
    return list.findIndex((item) => item.text === text);
  };

  // list

  //  mark complete
  const markComplete = (index) => {
    const newList = [...list];
    let selectedItem = newList[index];
    newList[index] = { text: selectedItem.text, completed: true };
    setList(newList);
  };

  //delete
  const onDelete = (index) => {
    // const newList = [...list];
    // newList.splice(index, 1);
    // setList(newList);
    setList(list.filter((item, i) => i !== index));
  };

  // edit
  const editTodo = ()

  const todoInputElem = (
    <div>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      ></input>
      <button onClick={addTodo}>add</button>
    </div>
  );

  const todoListElem = list.map((item, index) => {
    return (
      <li key={item.text}>
        <span>{item.text} </span>
        <button
          onClick={() => {
            markComplete(index);
          }}
          disabled={item.completed}
        >
          {item.complete ? "completed" : "Mark complete"}
        </button>
        <button
          onClick={() => {
            onDelete(index);
          }}
        >
          delete
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      {todoInputElem}
      <ul>{todoListElem}</ul>
    </div>
  );
}






-------
Online Javascript Editor for free
Write, Edit and Run your Javascript code using JS Online Compiler

console.log(name); //  undefined
var name = "Foo";
console.log(name); //  Foo

function printName() {
  console.log(name); //   undefined
  name = "Bar";
  console.log(name); //    Bar
}

printName();
console.log(name); //    Foo



console.log("1");  
setTimeout(function() { console.log("2")}, 1000)
console.log("3");
setTimeout(function() { console.log("4")}, 3000)
console.log("5");
new Promise((resolve, reject) => {
console.log("6");
resolve();
).then(res => {
console.log("7");
})

//  1, 3, 5, 6, 7, 2, 4



var obj = {
  name: "Rahul",
  printName: function(city) {
    console.log("Hi my Name is " + this.name + " and I am from " + city);
  }
}

obj.printName("Pune"); // Hi my name is Rahul and I am from Pune

// Hi my name is Sannidhi and I am from Kerala

let obj2 = { name: "sannidhi"}

obj.printName.call(obj2, "kerala")


let add =  (...arg) => {
    let sum = 0
    for(let i = 0; i< arg.length; i++ ){
        sum  = sum + arg[i]
    }
    
    console.log(sum)
    return (...args2) =>  add.bind(this, sum, ...args2)
}

add(1,2); // 3
add(1)(2)(3) // 6
add(1,2,3)(4) // 10



----

// let input ='AAAABBBCCDAABBB';
// // you have to converted into below expected array
// // exected_output =['A','B','C','D','A','B'];


// const strToArr = (str) => {
//     let arr=[]
//     let prev = ''
//     for(let i=0; i<str.length; i++) {
//         if(str[i] !== prev) {
//             arr.push(str[i])
//         }
//         prev = str[i]
//     }
//     return arr
// }

// const res = strToArr(input)
// console.log('res: ', res)
 
 
let input = [1,2,3,4,3,4,6,7,8]
// expected output :[3,4]


const getDup = (arr) => {
    let res = []
    let obj = {}
    arr.forEach((item) => {
        if(!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
    })
    
    Object.keys(obj).forEach(key => {
        if(obj[key] > 1) {
            res.push(key)
        }
    })
    
    return res
}

const res = getDup(input)
console.log('res: ', res)



















