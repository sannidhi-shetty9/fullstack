/*
A doubly linked list is a type of linked list data structure where each node contains data and references (pointers) to both the next and the previous node in the sequence. This bidirectional linkage allows for efficient traversal in both forward and backward directions.

Each node in a doubly linked list consists of three components:

1. Data: This holds the value or information that the node is supposed to store.
2. Next pointer: This points to the next node in the list.
3. Previous pointer: This points to the previous node in the list.

The first node in the list is called the head, and the last node is called the tail.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //new node is added to the end
      newNode.prev = this.tail; // end node (tail) in the prev of new node
      this.tail.next = newNode; // new node is added to the next of the tail node
      this.tail = newNode; // new node is assigned to the tail
    }
  }

  printForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  printBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

// Usage:
const linkedList = new DoublyLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.printForward();
// Output: 10
//         20
//         30

linkedList.printBackward();
// Output: 30
//         20
//         10

/*
In this implementation, the `Node` class represents individual nodes of the doubly linked list, and the `DoublyLinkedList` class is used to manage the list. The `append` method adds elements to the end of the list, and the `printForward` method is used to print the elements in the list in forward order, while the `printBackward` method prints the elements in backward order.

Doubly linked lists offer the advantage of efficient traversal in both directions, making them useful for scenarios that require backward as well as forward traversals. However, they require more memory overhead due to the additional `prev` pointers. Additionally, inserting and deleting nodes from the doubly linked list can be more complex than in singly linked lists due to managing both `prev` and `next` pointers.
*/