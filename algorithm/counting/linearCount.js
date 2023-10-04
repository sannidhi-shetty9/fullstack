function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        } else if (arr[i] > target) {
            break; // No need to continue if elements are greater than the target
        }
    }
    return count;
}

const sortedArray = [1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 6];
const targetElement = 4;

const occurrenceCount = countOccurrences(sortedArray, targetElement);
console.log(`The occurrence count of ${targetElement} is: ${occurrenceCount}`);
