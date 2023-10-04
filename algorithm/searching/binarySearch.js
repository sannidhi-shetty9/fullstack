/*
Binary search is a more efficient search algorithm than linear search, particularly for sorted arrays. It employs a divide-and-conquer approach to quickly locate a target element by repeatedly narrowing down the search range.

Here's how binary search works:
1. Input: Binary search requires a sorted array as input. If the array is not sorted, you should sort it first (which has a time complexity of O(n log n)).
2. Initialization: Set two pointers, `low` and `high`, initially pointing to the first and last elements of the array, respectively.
3. Midpoint Calculation: Calculate the midpoint between `low` and `high` as `(low + high) / 2`.
4. Comparison: Compare the element at the calculated midpoint with the target element.
    a. If the midpoint element is equal to the target element, the search is successful, and the index of the midpoint is returned.
    b. If the midpoint element is less than the target element, set `low` to `midpoint + 1` and repeat step 3.
    c. If the midpoint element is greater than the target element, set `high` to `midpoint - 1` and repeat step 3.
5. Repeat: Continue steps 3-4 until `low` is greater than `high`, indicating that the search range has been exhausted.
6. Termination: If the search range is exhausted and the target element has not been found, return -1 to indicate that the element is not in the array.

Binary search has a time complexity of O(log n), which makes it much more efficient than linear search (O(n)) for large datasets.

Here's an example implementation of binary search in JavaScript:
*/

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target element at index mid
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Target element not found in the array
}

// Example usage
const sortedArray = [1, 2, 4, 5, 8, 9];
const targetElement = 8;
const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Target element ${targetElement} found at index ${result}`);
} else {
    console.log(`Target element ${targetElement} not found in the array`);
}

/*
In this example, the `binarySearch` function takes a sorted array (`arr`) and a target element (`target`) as inputs. It performs binary search on the array to find the target element and returns its index if found, or -1 if not found.
*/  