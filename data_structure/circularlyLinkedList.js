/*
A circularly linked list is a variation of a linked list data structure where the last node's next pointer is not set to null, but instead, it points back to the first node (head), forming a closed loop. This circular linkage allows for efficient traversal of the list without the need to check for the end of the list, as the traversal will continuously loop through the elements.

Each node in a circularly linked list has two components:

1. Data: This holds the value or information that the node is supposed to store.
2. Next pointer: This points to the next node in the list.

The first node in the list is called the head, and it serves as the starting point for traversing the entire list. The last node's next pointer points back to the head, creating the circular structure.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // Point back to the head for circular linkage
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head; // Point back to the head for circular linkage
    }
  }

  print() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

// Usage:
const circularLinkedList = new CircularLinkedList();
circularLinkedList.append(10);
circularLinkedList.append(20);
circularLinkedList.append(30);
circularLinkedList.print();
// Output: 10
//         20
//         30

/*
In this implementation, the `Node` class represents individual nodes of the circularly linked list, and the `CircularLinkedList` class is used to manage the list. The `append` method adds elements to the end of the list, and the `print` method is used to print the elements in the list. The `print` method uses a `do-while` loop to traverse the circular list until it reaches the head again.

Circularly linked lists are useful in scenarios where you need to continuously loop through the elements or when you want a circular buffer or queue. They are particularly suitable for applications that involve circular patterns, such as scheduling algorithms or tasks that need to be repeated indefinitely. Additionally, they save memory because there is no need to store a separate null reference to mark the end of the list.
*/