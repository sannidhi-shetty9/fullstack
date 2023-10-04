const { addPerformanceChecker } = require("./utility");

/*
Bubble sort:
Bubble sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no more swaps are needed, indicating that the list is sorted. Here's how the bubble sort algorithm works:
1. Start with the first element (index 0) of the list.
2. Compare the current element with the next element (index 1).
3. If the current element is larger than the next element (out of order), swap them.
4. Move to the next pair of elements (index 1 and index 2) and repeat the comparison and swapping.
5. Continue this process until you reach the end of the list. At this point, the largest element has "bubbled up" to the last position.
6. Repeat the entire process for the remaining unsorted portion of the list (excluding the last element that was already sorted).
Continue these passes until no more swaps are needed, indicating that the list is fully sorted.
*/
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place, so we don't need to check them
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements and swap if needed
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
  }
  
  const monitoredBubbleSort = addPerformanceChecker(bubbleSort);

  module.exports = {
    bubbleSort,
    monitoredBubbleSort
  }