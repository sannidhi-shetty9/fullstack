/*
In JavaScript, the `Set` is a built-in data structure that represents a collection of unique values. It allows you to store values of any data type, such as numbers, strings, objects, and more, without duplicates. The main characteristic of a `Set` is that it automatically ensures that each value appears only once within the collection.
*/

// Creating a Set
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add("hello");
mySet.add({ name: "John" });

// Adding duplicate elements has no effect (they are ignored)
mySet.add(1);
mySet.add("hello");

// Checking the size of the Set
console.log(mySet.size); // Output: 3

// Checking if a value exists in the Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has("world")); // Output: false

// Removing an element from the Set
mySet.delete("hello");

// Iterating through the Set
mySet.forEach(value => {
  console.log(value);
});

// Clearing all elements from the Set
mySet.clear();

/*
Key features of `Set`:
1. Uniqueness: A `Set` ensures that each value appears only once within the collection. Adding a duplicate value will have no effect.
2. Iterability: You can easily iterate through the elements of a `Set` using methods like `forEach`.
3. Size: The `size` property returns the number of elements in the `Set`.
4. Membership Check: The `has()` method allows you to check whether a particular value exists in the `Set`.
5. Deletion: The `delete()` method removes a specific value from the `Set`.
6. Clearing: The `clear()` method removes all elements from the `Set`.

The `Set` data structure is useful in scenarios where you need to maintain a collection of unique values and don't want duplicates. It's commonly used for filtering out duplicates from arrays, storing unique keys in various algorithms, and performing set operations like union, intersection, and difference between sets.
*/