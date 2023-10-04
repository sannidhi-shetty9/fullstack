/*
Recursion is a programming concept where a function calls itself in order to solve a problem. It's a fundamental technique used in many programming languages to solve problems that can be broken down into smaller, similar sub-problems. Recursion is based on the idea of solving a problem by reducing it to a smaller instance of the same problem.

In a recursive function, there are generally two main components:

Base Case: This is the simplest form of the problem that can be solved directly without further recursion. It acts as the termination condition for the recursion, preventing an infinite loop.

Recursive Case: This is where the function calls itself with a modified version of the problem, typically with smaller input data. The goal is to break down the original problem into smaller, more manageable sub-problems, and then combine their solutions to solve the original problem.
*/

// Example: Calculating the factorial of a number using recursion

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case
  } else {
    return n * factorial(n - 1); // Recursive case
  }
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

/*
  In this example, the factorial function uses recursion to calculate the factorial of a given number. The base case is when n is 0 or 1, in which case the factorial is 1. The recursive case calculates the factorial by multiplying n with the factorial of n - 1.
*/

/*
Here's another example that demonstrates recursion by implementing a function to compute the nth number in the Fibonacci sequence:
  */

// Example: Computing the nth Fibonacci number using recursion

function fibonacci(n) {
  if (n <= 0) {
    return 0; // Base case
  } else if (n === 1) {
    return 1; // Base case
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
  }
}

console.log(fibonacci(6)); // Output: 8 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8)

/*
  n this example, the fibonacci function calculates the nth Fibonacci number using recursion. The base cases are when n is 0 or 1, and the recursive case calculates the nth Fibonacci number by adding the (n-1)th and (n-2)th Fibonacci numbers.
*/
