/*
A queue is another linear data structure that follows the First-In-First-Out (FIFO) principle, meaning that the first element added to the queue will be the first one to be removed. Think of a queue as a line of people waiting for a service; the person who arrived first will be served first.

A queue supports two primary operations:
1. Enque: This operation is used to add an element to the back (end) of the queue.
2. Deque: This operation is used to remove the front (first) element from the queue.

Additional commonly used operations include:
3. Front (or Peek): This operation retrieves the front element without removing it from the queue.
4. IsEmpty: This operation checks if the queue is empty.

Queues can also be implemented using arrays or linked lists. Here's a simple example of a queue implemented using an array in JavaScript:
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return null; // Queue is empty
  }

  front() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null; // Queue is empty
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
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.clear();
console.log(queue.isEmpty()); // Output: true

/*
The `Queue` class is implemented using an array called `items`. The `enqueue` method adds an element to the end of the array (back of the queue), and the `dequeue` method removes the first element (front) from the array. The `front` method returns the front element without removing it. The `isEmpty` method checks if the queue is empty, and the `size` method returns the number of elements in the queue. The `clear` method is used to empty the queue.

Queues are widely used in computer science for various applications, including process scheduling, task management, and handling network data packets, among others.
*/