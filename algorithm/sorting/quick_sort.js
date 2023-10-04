/*
Quick sort is a widely used sorting algorithm that employs a divide-and-conquer strategy to sort an array or list. It works by selecting a pivot element, partitioning the array into two subarrays (elements less than the pivot and elements greater than the pivot), and then recursively sorting these subarrays. Quick sort has an average and best-case time complexity of O(n log n), making it one of the fastest sorting algorithms, especially for larger datasets.

Here's how the quick sort algorithm works:
1. Partitioning: Choose a pivot element from the array. Rearrange the array so that all elements less than the pivot are on the left side, and all elements greater than the pivot are on the right side. The pivot is now in its correct sorted position.
2. Recursion: Recursively apply the quick sort algorithm to the subarrays on the left and right of the pivot.
3. Base Case: The base case occurs when a subarray has one or zero elements, as it is already considered sorted.
4. Combine: As the recursion unwinds, the subarrays are combined to produce the fully sorted array.
*/

const { addPerformanceChecker } = require("./utility");

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case
    }

    const pivot = arr[0]; // Choose the first element as the pivot
    const left = [];
    const right = [];

    // Partition the array into two subarrays
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the subarrays and combine them with the pivot
    return quickSort(left).concat(pivot, quickSort(right));
}

const monitoredQuickSort = addPerformanceChecker(quickSort);

module.exports = {
    quickSort,
    monitoredQuickSort
}


// Example usage
// const unsortedArray = [5, 3, 8, 4, 2];
// const sortedArray = quickSort(unsortedArray);
// console.log(sortedArray); // Output: [2, 3, 4, 5, 8]

/*
In this implementation, the `quickSort` function follows the steps outlined above. It chooses the first element as the pivot and partitions the array into two subarrays. The subarrays are then recursively sorted using the `quickSort` function, and the final sorted array is obtained by concatenating the sorted left subarray, the pivot, and the sorted right subarray.

Quick sort is an efficient and widely used sorting algorithm in practice. However, it's worth noting that its worst-case time complexity can be O(n^2) in scenarios where the pivot selection leads to unbalanced partitioning. To mitigate this, techniques like random pivot selection and choosing a median-of-three pivot can be used.
*/