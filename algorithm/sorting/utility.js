const addPerformanceChecker = (fn) => {
  return (...args) => {
    console.log("starting execution...");
    let startTime = performance.now();
    res = fn(...args);
    let endTime = performance.now();
    const elapsedTime = (endTime - startTime).toFixed(2);
    console.log(`execution time: ${elapsedTime}ms`);
    return res;
  };
};

const generateArray = (length, digits = 1000) => {
  let arr = [];
  for (i = 0; i < length; i++) {
    arr.push(Math.round(Math.random() * digits));
  }
  return arr;
};

module.exports = {
  addPerformanceChecker,
  generateArray
}


// // insertion sorting
// const insert = (arr, val) => {
//   if (!arr.length) return [val];
//   else if (arr[0] >= val) return [val, ...arr];
//   else if (arr[arr.length - 1] <= val) return [...arr, val];
//   else {
//     const min = arr.shift();
//     const max = arr.pop();
//     return [min, ...insert(arr, val), max];
//   }
// };

// const insertionSort = (arr) => {
//   let sortedArr = [];
//   for (i = 0; i < arr.length; i++) {
//     sortedArr = insert(sortedArr, arr[i]);
//   }
//   return sortedArr;
// };

// const monitoredInsertionSort = addPerformanceChecker(insertionSort);


