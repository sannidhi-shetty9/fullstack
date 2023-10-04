/*
A heap is a specialized tree-based data structure that satisfies the heap property. The heap property states that for a max-heap, the value of each node is greater than or equal to the values of its children, and for a min-heap, the value of each node is less than or equal to the values of its children.

Heaps are often used to implement priority queues, which are data structures that allow efficient retrieval and removal of the element with the highest (or lowest) priority. The heap's structure makes it easy to find and remove the element with the highest (or lowest) priority, making it suitable for various applications like scheduling, task management, and more.

There are two main types of heaps:

1. Max-Heap: In a max-heap, the parent nodes have values greater than or equal to the values of their children.

2. Min-Heap: In a min-heap, the parent nodes have values less than or equal to the values of their children.

The two essential operations in a heap are:

1. Insertion: Adding a new element to the heap while maintaining the heap property.

2. Extraction: Removing the root element (the highest or lowest priority) from the heap and restoring the heap property.

Heaps are typically implemented using arrays, where the parent-child relationships are determined by the indices of the elements in the array. The root of the heap is at index 0, and for a node at index `i`, its left child is at index `2i + 1`, and its right child is at index `2i + 2`.

Here's a basic example of a min-heap implementation in JavaScript:
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.isEmpty()) {
      return null;
    }

    const min = this.heap[0];
    const last = this.heap.pop();
    if (!this.heap.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return min;
  }

//   comparing child (n) with parent ((n-1)/2) and swapping child with parent if parent is larger than child till root or till parent is smaller than child
  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]; // swapping this.heap[parentIndex] and this.heap[index]
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  //comparing parent with its childrens ((2n+1), (2n+2)), and exchanging parent value with smallest child value. the step is repeated moving down the tree, unitl end of the tree or child element is larger than parent
  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]; // swapping
      this.heapifyDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Usage:
const heap = new MinHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(15);

console.log(heap.extractMin()); // Output: 5
console.log(heap.extractMin()); // Output: 10

/*
This is a simplified example of a min-heap. In practice, heaps can be used for various applications, including sorting algorithms like Heap Sort, priority queues, and more complex data manipulation tasks.
*/

/*
`heapifyUp` is a crucial operation in a binary heap data structure. It is used to maintain the heap property after a new element has been inserted into the heap. The `heapifyUp` operation ensures that the newly added element "bubbles up" to its correct position in the heap by comparing its value with its parent's value and swapping them if necessary.

Here's the basic idea behind the `heapifyUp` operation:

1. Start with the index of the newly inserted element, typically denoted as `index`.
2. Calculate the index of the parent of the element using the formula: `parentIndex = Math.floor((index - 1) / 2)`.
3. Compare the value of the element at index `index` with the value of the element at index `parentIndex`.
4. If the value at `index` is smaller (for a min-heap) or larger (for a max-heap) than the value at `parentIndex`, swap the elements.
5. Repeat steps 2-4 until the element reaches its correct position or until the element becomes the root of the heap (index 0).

In this example, we have a min-heap represented by the `minHeap` array. We insert a new element `12` into the heap and then perform the `heapifyUp` operation to ensure that the heap property is maintained.

Remember that `heapifyUp` is an essential operation for maintaining the correctness of a binary heap, especially after inserting a new element. It guarantees that the newly inserted element doesn't violate the heap property and ends up in its appropriate position within the heap.
*/

/*
`heapifyDown` is another crucial operation in a binary heap data structure. It is used to maintain the heap property after removing the root element (typically the element with the highest or lowest priority) from the heap. The `heapifyDown` operation ensures that the new root element "bubbles down" to its correct position in the heap by comparing its value with the values of its children and swapping if necessary.

Here's the basic idea behind the `heapifyDown` operation:

1. Start with the index of the root element (the element that needs to be moved down), typically denoted as `index`.
2. Calculate the indices of the left and right children using the formulas: `leftChildIndex = 2 * index + 1` and `rightChildIndex = 2 * index + 2`.
3. Find the index of the smallest (for a min-heap) or largest (for a max-heap) among the parent and its children.
4. If the value at the current index is greater (for a min-heap) or smaller (for a max-heap) than the value at the smallest (or largest) child index, swap the elements.
5. Update the `index` to the index of the smallest (or largest) child and repeat steps 2-4 until the element reaches its correct position.

In this example, we have a min-heap represented by the `minHeap` array. We perform the steps necessary to replace the root element with the last element, remove the last element, and then call the `heapifyDown` operation to ensure that the heap property is maintained.

`heapifyDown` is crucial for maintaining the heap property after removing the root element or performing other operations that modify the heap's structure. It ensures that the new root element finds its correct position within the heap by comparing it with its children.
*/