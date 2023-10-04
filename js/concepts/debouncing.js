// Debouncing is a technique used in JavaScript to control the frequency of a function call, especially in scenarios where an event may be triggered rapidly, such as during user input (e.g., typing, scrolling) or resizing the window. The debounce function delays the execution of a function until a specified amount of time has passed since the last time the function was invoked.
// The purpose of debouncing is to optimize performance and reduce unnecessary function calls, especially for tasks that are resource-intensive or require network requests. By debouncing a function, you ensure that it is only executed once after a series of rapid events, rather than executing it for each individual event, which can lead to inefficient use of resources.

// Here's a simple implementation of a debounce function in JavaScript:

function debounce(func, delay) {
  let timerId;
  
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// This `debounce` function takes two parameters:
// 1. `func`: The function that you want to debounce.
// 2. `delay`: The time (in milliseconds) that needs to pass before the debounced function is executed.
// The returned function is the debounced version of the original function. When the debounced function is invoked, it starts a timer with the specified delay. If the debounced function is invoked again before the timer expires, the previous timer is cleared, and a new timer is started. This process continues until the specified delay has passed without any further invocations of the debounced function. After the delay, the debounced function is finally executed with the latest set of arguments.

// Here's an example of how to use the `debounce` function:

function expensiveFunction(value) {
  console.log("Expensive function called with:", value);
  // Perform resource-intensive task here...
}

const debouncedFunction = debounce(expensiveFunction, 500);

// Simulate rapid user input (e.g., typing)
debouncedFunction("A");
debouncedFunction("B");
debouncedFunction("C");

// Output: (after 500ms)
// Expensive function called with: C

// In this example, the `expensiveFunction` is debounced with a delay of 500 milliseconds. As we invoke `debouncedFunction` rapidly with different arguments, the actual execution of `expensiveFunction` is delayed until the user stops typing (or after 500ms of inactivity). This prevents unnecessary executions of the expensive function and ensures it is only called once with the latest value.