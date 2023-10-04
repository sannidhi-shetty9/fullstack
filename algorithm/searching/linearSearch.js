/*
Linear search, also known as sequential search, is a simple and straightforward search algorithm used to find a specific target element within a list or array of elements. It involves checking each element in the list one by one until the desired element is found or until all elements have been checked.

Here's how a linear search works:

1. Start at the beginning of the list.
2. Compare the target element with the current element in the list.
3. If the current element matches the target element, the search is successful, and the position/index of the element is returned.
4. If the current element does not match the target element, move to the next element in the list and repeat step 2.
5. Continue this process until the target element is found or until all elements have been checked.

Linear search is very intuitive and easy to implement. However, it can be relatively slow for large datasets because it has a time complexity of O(n), where n is the number of elements in the list. This means that the worst-case scenario is that the algorithm has to check every element in the list before finding the target element.

Despite its simplicity and potential inefficiency for large datasets, linear search has its use cases. It's particularly suitable for small lists or when the data is unordered. In situations where the list is not too large or where the target element is located near the beginning of the list, linear search can be a reasonable choice.
*/


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found the target element at index i
        }
    }
    return -1; // Target element not found in the array
}

// Example usage
const myArray = [4, 2, 8, 1, 9, 5];
const targetElement = 8;
const result = linearSearch(myArray, targetElement);

if (result !== -1) {
    console.log(`Target element ${targetElement} found at index ${result}`);
} else {
    console.log(`Target element ${targetElement} not found in the array`);
}

/*
In this JavaScript example, the `linearSearch` function takes an array (`arr`) and a target element (`target`) as inputs. It iterates through the array using a loop, comparing each element to the target element. If the target element is found, the function returns the index at which the element was found; otherwise, it returns -1 to indicate that the target element was not found in the array.

The example usage demonstrates how to call the `linearSearch` function with a sample array and a target element. Depending on whether the target element is found or not, it prints a corresponding message to the console.

Keep in mind that linear search is not the most efficient algorithm for large datasets, but it serves as a simple illustration of a search algorithm. For larger datasets or situations where performance is critical, more efficient algorithms like binary search are typically preferred.
*/
