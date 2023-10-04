/*
In JavaScript, the `Map` is a built-in data structure that allows you to store key-value pairs. It is similar to an object, but with some differences and advantages. The main feature of a `Map` is that it maintains the order of the keys and provides methods to manage the data efficiently.
*/

// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("isStudent", false);

// Getting values by key
console.log(myMap.get("name")); // Output: "John"
console.log(myMap.get("age")); // Output: 30

// Checking if a key exists in the Map
console.log(myMap.has("isStudent")); // Output: true
console.log(myMap.has("country")); // Output: false

// Deleting a key-value pair from the Map
myMap.delete("age");

// Checking the size of the Map
console.log(myMap.size); // Output: 2

// Clearing all key-value pairs from the Map
myMap.clear();

// Iterating through the Map
myMap.set("a", 1);
myMap.set("b", 2);

myMap.forEach((value, key) => {
  console.log(key, value);
});

/*
Key features of `Map`:
1. Key-Value Pairs: `Map` stores data as key-value pairs, allowing you to associate values with unique keys.
2. Order Preservation: Unlike regular objects, `Map` maintains the order of key-value pairs, so you can iterate through them in the order they were added.
3. Iterability: You can iterate through the key-value pairs using methods like `forEach`.
4. Size: The `size` property returns the number of key-value pairs in the `Map`.
5. Membership Check: The `has()` method allows you to check whether a specific key exists in the `Map`.
6. Value Retrieval: The `get()` method retrieves the value associated with a particular key.
7. Deletion: The `delete()` method removes a specific key-value pair from the `Map`.
8. Clearing: The `clear()` method removes all key-value pairs from the `Map`.

The `Map` data structure is useful when you need to store key-value pairs with order preservation and efficient access to values by their keys. It is commonly used in scenarios where you want to keep track of associations between entities, manage configuration settings, or create more complex data structures that require flexible key-value relationships.
*/