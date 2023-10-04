const { generateArray } = require("./utility");
const { monitoredBubbleSort } = require("./bubble_sort");
const { monitoredInsertionSort } = require("./insertion_sort");
const { monitoredSelectionSort } = require("./selection_sort");
const { monitoredMergeSort } = require("./merge_sort");
const { monitoredQuickSort } = require("./quick_sort");



let arr = generateArray(100000);

if (1) {
  console.log("\nbubble sort:");
  monitoredBubbleSort([...arr]);
}

if (1) {
  console.log("\ninsertion sort:");
  res = monitoredInsertionSort([...arr]);
}
if (1) {
    console.log("\nSelection sort:");
    monitoredSelectionSort([...arr]);
  }
  
  if (1) {
    console.log("\nMerge sort:");
    res = monitoredMergeSort([...arr]);
  }
  if (1) {
    console.log("\nQuick sort:");
    res = monitoredQuickSort([...arr]);
  }