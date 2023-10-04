/*
Selection sort is another simple sorting algorithm that works by repeatedly selecting the minimum (or maximum, depending on the desired order) element from the unsorted portion of the list and putting it at the end of the sorted portion. The algorithm divides the input list into two parts: the sorted portion on the left and the unsorted portion on the right.

Here's how the selection sort algorithm works:

1. Find the minimum (or maximum) element in the unsorted portion of the list.
2. Swap the found minimum (or maximum) element with the first element of the unsorted portion.
3. Expand the sorted portion by moving its boundary one element to the right.

Repeat steps 1 to 3 until the entire list is sorted.

Selection sort has a time complexity of O(n^2), making it inefficient for larger datasets. However, it has a notable property of making the same number of swaps regardless of the initial order of the elements, which can be useful in certain situations.
*/

const { addPerformanceChecker } = require("./utility");


function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

const monitoredSelectionSort = addPerformanceChecker(selectionSort);

module.exports = {
    selectionSort,
    monitoredSelectionSort
}

// Example usage
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
