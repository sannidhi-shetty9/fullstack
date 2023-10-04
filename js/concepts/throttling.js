// Throttling is a technique used in JavaScript to limit the frequency of a function call, particularly for event handlers that can be triggered rapidly. The throttle function ensures that the target function is executed at a specified maximum rate, even if the event that triggers it is fired more frequently.

// The purpose of throttling is to optimize performance and prevent excessive function calls, especially for tasks that may be resource-intensive or trigger actions with a significant impact (e.g., network requests, DOM updates). Throttling ensures that the function is called at a controlled rate, providing a balance between responsiveness and resource utilization.

// The throttle function is similar to the debounce function, but instead of delaying the function call until a certain time has passed, it limits the frequency of the function call by allowing it to be executed at specific intervals.

// Here's a simple implementation of a throttle function in JavaScript:

function throttle(func, limit) {
  let inThrottle = false;

  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// This `throttle` function takes two parameters:
// 1. `func`: The function that you want to throttle.
// 2. `limit`: The minimum time (in milliseconds) between consecutive executions of the throttled function.

// The returned function is the throttled version of the original function. When the throttled function is invoked, it checks if it is currently in a "throttled" state. If it's not, the function is executed, and the "throttled" state is set to true. A timer is started to reset the "throttled" state back to false after the specified limit. Any additional invocations of the throttled function during this "throttled" state will be ignored until the timer expires.

// Here's an example of how to use the `throttle` function:

function logMessage(message) {
  console.log(message);
}

const throttledLog = throttle(logMessage, 1000);

// Simulate rapid events (e.g., scrolling)
throttledLog("Event 1");
throttledLog("Event 2");
throttledLog("Event 3");

// Output: (approximately every 1000ms)
// Event 1
// Event 3

// In this example, the `logMessage` function is throttled with a limit of 1000 milliseconds. As we invoke `throttledLog` rapidly with different arguments, the actual execution of `logMessage` is limited to occur at most once every 1000 milliseconds. This prevents excessive logging and ensures the function is called at a controlled rate.