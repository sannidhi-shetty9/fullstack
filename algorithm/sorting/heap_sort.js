/*
Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to create a partially ordered tree. It works by converting the input array into a heap, which is a complete binary tree with the heap property (either min-heap or max-heap), and then repeatedly extracting the root (which is the smallest or largest element, depending on the type of heap) and placing it at the end of the sorted portion of the array. Heap sort has an average, worst, and best-case time complexity of O(n log n), making it an efficient sorting algorithm.

Here's how the heap sort algorithm works:

1. Build the Heap: Convert the input array into a heap. Starting from the last non-leaf node and working backwards, sift down each element to its correct position to satisfy the heap property.

2. Sort: Repeatedly extract the root element (which is the smallest or largest element, depending on the type of heap) from the heap and place it at the end of the sorted portion of the array.

3. Repeat: Continue step 2 until all elements have been extracted and placed in the sorted portion.

Here's a JavaScript implementation of the heap sort algorithm using a max-heap (sorting in ascending order):
*/

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Build a max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root and last element
        heapify(arr, i, 0); // Heapify the reduced heap
    }

    return arr;
}

// Example usage
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]

/*
In this implementation, the `heapify` function is responsible for maintaining the max-heap property. The `heapSort` function first builds a max-heap from the input array and then repeatedly extracts the maximum element (root) from the heap, placing it in the sorted portion of the array.

Heap sort is an efficient sorting algorithm and is used in various programming contexts. It provides consistent performance and is especially useful when stable sorting is not required.
*/

/*
Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to create a partially ordered tree. It works by converting the input array into a heap, which is a complete binary tree with the heap property (either min-heap or max-heap), and then repeatedly extracting the root (which is the smallest or largest element, depending on the type of heap) and placing it at the end of the sorted portion of the array. Heap sort has an average, worst, and best-case time complexity of O(n log n), making it an efficient sorting algorithm.

Here's how the heap sort algorithm works:
1. Build the Heap: Convert the input array into a heap. Starting from the last non-leaf node and working backwards, sift down each element to its correct position to satisfy the heap property.
2. Sort: Repeatedly extract the root element (which is the smallest or largest element, depending on the type of heap) from the heap and place it at the end of the sorted portion of the array.
3. Repeat: Continue step 2 until all elements have been extracted and placed in the sorted portion.

Here's a JavaScript implementation of the heap sort algorithm using a max-heap (sorting in ascending order):

In this implementation, the `heapify` function is responsible for maintaining the max-heap property. The `heapSort` function first builds a max-heap from the input array and then repeatedly extracts the maximum element (root) from the heap, placing it in the sorted portion of the array.

Heap sort is an efficient sorting algorithm and is used in various programming contexts. It provides consistent performance and is especially useful when stable sorting is not required.
*/

/*
The code snippet you've provided is a common pattern used to build a max-heap from an array. It starts heapifying the array from the last non-leaf node and works its way up towards the root. Let me break down the code snippet for you:

```javascript
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
}
```

Here's what each part of this code does:
1. `n` is the total number of elements in the array. The `Math.floor(n / 2) - 1` calculates the index of the last non-leaf node in the array. In a zero-based index, the parent of the last element will be at index `Math.floor(n / 2) - 1`.
2. The loop iterates over each non-leaf node in reverse order, from the last non-leaf node to the root of the tree (index 0).
3. Inside the loop, the `heapify` function is called with parameters `arr`, `n`, and `i`. This means that the subtree rooted at index `i` will be heapified.

The purpose of this loop is to ensure that the entire array is transformed into a valid max-heap. By starting the heapification process from the last non-leaf node and working upwards, we ensure that every node in the heap (subtree) satisfies the max-heap property. This process efficiently organizes the elements in the array so that we can then use the heap to extract the maximum element (root) and build a sorted array, as done in the heap sort algorithm.

Remember that heapifying a node means comparing it with its children and potentially swapping elements to satisfy the max-heap property, and this process is repeated recursively for all relevant subtrees until the entire array is heapified.
*/