/*
Insertion sort:
for ascending Starting from 2nd element, it is compared with the lower indexes, and these elements are right shifted until a smaller element is reached, and the comparing element is added to the right of the smaller element.
1. Start with the second element (index 1) of the list. The first element is considered already sorted.
2. Compare the current element with the elements before it in the sorted portion of the list.
3. Shift the larger elements one position to the right until the correct position for the current element is found.
4. Insert the current element into the correct position in the sorted portion.
5. Repeat steps 2 to 4 for each remaining element in the unsorted portion of the list.
The process continues until all elements have been inserted into their correct positions, resulting in a fully sorted list.
*/

const { addPerformanceChecker } = require("./utility");

function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const monitoredInsertionSort = addPerformanceChecker(insertionSort);

module.exports = {
    insertionSort,
    monitoredInsertionSort
}

// Example usage
// const unsortedArray = [5, 3, 8, 4, 2];
// const sortedArray = insertionSort(unsortedArray);
// console.log(sortedArray); // Output: [2, 3, 4, 5, 8]

/*
In this implementation, the insertionSort function takes an array as an argument and sorts it in ascending order using the insertion sort algorithm. The algorithm works by building a sorted portion of the array on the left side while iterating through the unsorted portion on the right side.

For each element in the unsorted portion, the algorithm compares it with the elements in the sorted portion and shifts larger elements to the right until the correct position for the element is found. This process continues until the entire array is sorted.

Insertion sort has an average and worst-case time complexity of O(n^2), but it can perform well for small lists or when the array is partially sorted. It's a stable sorting algorithm, meaning that the order of equal elements is preserved.
*/