/*
A hash table, also known as a hash map, is a widely used data structure that provides fast and efficient data retrieval. It stores data in an associative manner, where each data value (also called a "key") is associated with a specific index or position (also called a "hash") in the underlying array. This enables quick access to the data using the key, making hash tables an essential tool for tasks that involve key-value pairs.

Hash tables work by using a hash function to compute an index or address in the array where the value should be stored. The hash function takes the key as input and generates a unique hash code, which is then used to determine the array index. However, collisions can occur when different keys produce the same hash code, causing them to be mapped to the same array index. To handle collisions, hash tables use various collision resolution techniques, such as chaining (using linked lists) or open addressing (finding the next available slot).

Key features of hash tables:
1. Fast Lookup: Hash tables provide constant-time average-case access to elements, making them efficient for retrieval operations.
2. Associative Mapping: Hash tables allow data to be stored and retrieved using meaningful keys.
3. Dynamic Sizing: Hash tables can dynamically resize themselves to maintain a balance between space and efficiency.
4. Collision Handling: Hash tables have mechanisms to handle collisions and ensure proper storage of multiple values at the same hash index.
5. Complexity: In ideal conditions (uniform distribution of keys), hash table operations have an average-case time complexity of O(1), but in the worst case (significant collisions), operations can degrade to O(n), where n is the number of elements.

Here's a basic example of a hash table implementation in JavaScript:
*/

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

// hash function takes an input (such as a key) and produces a fixed-size string of characters, which is typically used as an index to determine the storage location of the corresponding value in the hash table's underlying array.
// In this, the basicHash function calculates the hash code for a given key by summing the character codes of its characters and then using the modulo operation to constrain the result to the desired range (table size). 
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (const [storedKey, value] of this.table[index]) {
      if (storedKey === key) {
        return value;
      }
    }
    return undefined;
  }

  printTable() {
    console.log(this.table)
  }
}

// Usage:
const hashTable = new HashTable(10);
hashTable.set("name", "John");
hashTable.set("name", "max");
hashTable.set("age", 30);

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age"));  // Output: 30
console.log(hashTable.get("city")); // Output: undefined
hashTable.printTable();
/*
this.table = 
 [
    <1 empty item>,
    [ [ 'age', 30 ] ],
    <5 empty items>,
    [ [ 'name', 'John' ], [ 'name', 'max' ] ],
    <2 empty items>
  ]
*/

/*
This example demonstrates a basic hash table implementation. It uses a simple hash function to compute the hash index based on the sum of character codes in the key. Collisions are handled using separate chaining, where each index in the `table` array holds an array of key-value pairs.

In real-world scenarios, hash table implementations often include more advanced techniques, optimizations, and consideration for factors like load factor, rehashing, and collision resolution strategies to ensure efficient and reliable performance.

table data syntax:
[
    [['key11', 'value11'],['key12', 'value12'],
    [['key21', 'value21'],['key22', 'value22']
]

eg:

*/

/*
Hashing is the process of transforming input data of variable length into a fixed-size value, typically a string of characters or a numerical value. The result of this transformation is called a hash code or hash value. Hashing is widely used in computer science for various purposes, including data storage, data retrieval, cryptography, and more.

Here are some common applications of hashing:

1. Hash Tables: Hashing is fundamental to hash table data structures, where keys are hashed to determine the index where corresponding values should be stored or retrieved. Hash tables provide efficient data retrieval based on keys.

2. Data Integrity: Hashing is used to ensure the integrity of data. Hash codes are computed for data, and any change to the data will result in a different hash code, allowing detection of data tampering.

3. Cryptography: Hash functions are used in cryptography for creating digital signatures, message authentication codes (MACs), and password hashing. Cryptographically secure hash functions are designed to resist attacks and provide properties like collision resistance.

4. Load Balancing: Hashing is used in load balancing algorithms to evenly distribute requests or data across multiple servers or resources.

5. Data Structures: Hashing is used to implement various data structures like hash sets, hash maps, and hash-based data structures like bloom filters.

6. File Storage: Hashing can be used to manage file storage, ensuring efficient storage and retrieval of files by generating unique identifiers.

7. Checksums: Hashing is used to create checksums for files or data to verify their integrity during transmission or storage.

8. Searching and Caching: Hashing can accelerate searching and caching operations by providing a quick way to look up data.

It's important to note that while hashing is useful for many applications, collisions can occur. Collisions happen when different inputs produce the same hash code. Dealing with collisions effectively is a critical aspect of hashing. Collision resolution techniques include chaining (using linked lists), open addressing (probing), and more sophisticated methods like double hashing.

When choosing a hash function or using hashing in your applications, consider factors like distribution properties, security requirements, and collision resistance to ensure the effectiveness and reliability of the hashing mechanism.
*/

// A fixed-size value refers to a value that has a constant and unchanging size, regardless of the size of the input or the data being processed. In the context of hashing, a fixed-size value is typically the result of applying a hash function to the input data. The hash function condenses the input data into a consistent and predetermined size.

// For example, consider a hash function that takes a string of characters as input and produces a fixed-size value of 128 bits (16 bytes). No matter how long or short the input string is, the hash function will always produce a hash code that is exactly 128 bits in length.