/*
A linked list is a linear data structure consisting of a sequence of nodes, where each node contains two components: data (or value) and a reference (or pointer) to the next node in the sequence. The linked list does not require contiguous memory allocation, as nodes can be scattered throughout the memory.
Each linked list has a head, which points to the first node in the list, and a tail (in some implementations), which points to the last node in the list. The tail node typically has a null reference, indicating the end of the list.

Linked lists can be of various types, including:
1. Singly Linked List: Each node contains data and a reference to the next node.
2. Doubly Linked List: Each node contains data, a reference to the next node, and a reference to the previous node.
3. Circular Linked List: The last node of the list points back to the first node, forming a closed loop.

Advantages:
- Dynamic Size: Linked lists can easily grow or shrink in size without the need for resizing.
- Efficient Insertions and Deletions: Insertions and deletions can be done in constant time complexity O(1) for singly linked lists and doubly linked lists (if the node is given).
- Memory Efficiency: Linked lists can save memory because they only allocate memory for nodes as needed.

Disadvantages:
- Random Access: Unlike arrays, linked lists do not allow for constant-time random access to elements. Accessing an element requires traversing the list from the head or tail, resulting in linear time complexity O(n) in the worst case.
- Extra Memory Overhead: Linked lists require extra memory for storing the references/pointers.
*/


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      // starting from head, travesing to the end of the linked list( last node next value is null)
      while (current.next) {
        current = current.next;
      }
      // attaching new node to the end of the linked list
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.print();
// Output: 10
//         20
//         30

/*
In this example, we have implemented a simple singly linked list with the `Node` class representing the individual nodes and the `LinkedList` class managing the list. The `append` method adds elements to the end of the list, and the `print` method is used to print the elements in the list.
*/