/*
Binary count:
. works only for sorted array.
. need to search first occurrence and last occurrence using binary search (checking middle elem, checking -> return (if equal), check left half(if middle is greater), check right half(if middle is smaller)).
. total occurrence = last occurrence - first occurrence + 1

*/

function firstOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;
}

function lastOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            result = mid;
            low = mid + 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;
}

function countOccurrencesBinarySearch(arr, target) {
    const first = firstOccurrence(arr, target);
    const last = lastOccurrence(arr, target);

    if (first === -1) {
        return 0;
    }

    return last - first + 1;
}

const sortedArray = [1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 6];
const targetElement = 4;

const occurrenceCount = countOccurrencesBinarySearch(sortedArray, targetElement);
console.log(`The occurrence count of ${targetElement} is: ${occurrenceCount}`);
