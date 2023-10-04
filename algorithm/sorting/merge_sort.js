/*
Merge sort is a divide-and-conquer sorting algorithm that divides the input array into smaller subarrays, sorts each subarray, and then merges them back together to produce a fully sorted array. It's known for its efficiency and consistent performance, making it one of the preferred sorting algorithms for large datasets. Merge sort has a time complexity of O(n log n) in the worst, average, and best cases.

Here's how the merge sort algorithm works:

1. Divide: Divide the unsorted array into two halves.
2. Conquer: Recursively sort each half.
3. Merge: Merge the sorted halves to produce a single sorted array.
*/

const { addPerformanceChecker } = require("./utility");


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: An array of length 1 is already sorted
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort each half
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right subarrays and merge them
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left and right subarrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const monitoredMergeSort = addPerformanceChecker(mergeSort);

module.exports = {
    mergeSort,
    monitoredMergeSort
}

// Example usage
// const unsortedArray = [5, 3, 8, 4, 2];
// const sortedArray = mergeSort(unsortedArray);
// console.log(sortedArray); // Output: [2, 3, 4, 5, 8]


/*
In this implementation, the `mergeSort` function recursively divides the array into smaller subarrays until each subarray contains a single element (the base case). Then, the `merge` function is used to merge and sort the subarrays back together.

Merge sort is a stable sorting algorithm, meaning that the relative order of equal elements is preserved. It's suitable for sorting large datasets and is commonly used in various programming contexts.
*/

/*
The `merge` function is a crucial part of the merge sort algorithm. It takes two sorted arrays (`left` and `right`) and merges them into a single sorted array. The goal is to combine the elements from both arrays while maintaining their sorted order.

Here's a step-by-step explanation of how the `merge` function works:

1. Create an empty array called `result` to store the merged and sorted elements.
2. Initialize two index pointers: `leftIndex` for the `left` array and `rightIndex` for the `right` array. These pointers will keep track of the current positions being compared in each array.
3. Compare the elements at the current positions pointed to by `leftIndex` and `rightIndex`.
   - If the element at `left[leftIndex]` is smaller than the element at `right[rightIndex]`, push `left[leftIndex]` into the `result` array, and increment `leftIndex` to move to the next element in the `left` array.
   - If the element at `right[rightIndex]` is smaller than or equal to the element at `left[leftIndex]`, push `right[rightIndex]` into the `result` array, and increment `rightIndex` to move to the next element in the `right` array.
4. Repeat step 3 until one of the arrays (`left` or `right`) has been fully processed.
5. After finishing the loop, if there are any remaining elements in the `left` array (i.e., `leftIndex` is less than the length of `left`), append them to the end of the `result` array.
6. Similarly, if there are any remaining elements in the `right` array (i.e., `rightIndex` is less than the length of `right`), append them to the end of the `result` array.
7. Return the `result` array, which now contains all the elements from `left` and `right` merged in sorted order.


The `merge` function efficiently combines the sorted `left` and `right` arrays into a single sorted array. This merging step is essential in the merge sort algorithm to ensure that the divided subarrays are properly sorted when they are merged back together.
*/