/*
A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning that the last element added to the stack will be the first one to be removed. Imagine a stack of plates; you can only add or remove plates from the top of the stack.

A stack supports two primary operations:
1. Push: This operation is used to add an element to the top of the stack.
2. Pop: This operation is used to remove the topmost element from the stack.
Additional commonly used operations include:
1. Peek (or Top): This operation retrieves the top element without removing it from the stack.
2. IsEmpty: This operation checks if the stack is empty.
Stacks can be implemented using arrays or linked lists. Here's a simple example of a stack implemented using an array in JavaScript:
*/

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
      return null; // Stack is empty
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
      return null; // Stack is empty
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }
  
  // Usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // Output: 30
  console.log(stack.pop()); // Output: 30
  console.log(stack.size()); // Output: 2
  console.log(stack.isEmpty()); // Output: false
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  

  /*
  the Stack class is implemented using an array called items. The push method adds an element to the end of the array (top of the stack), and the pop method removes the last element (top) from the array. The peek method returns the top element without removing it. The isEmpty method checks if the stack is empty, and the size method returns the number of elements in the stack. The clear method is used to empty the stack.
  */