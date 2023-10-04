/*
A tree is a hierarchical and non-linear data structure that consists of nodes connected by edges. Each node in a tree has a parent node (except for the root node), zero or more child nodes, and exactly one node that is its parent (except for the root node). Nodes with no children are called leaf nodes.

The topmost node in a tree is called the root, and it serves as the starting point for accessing all other nodes in the tree. Nodes directly connected to a parent node are referred to as the parent node's children.

Trees have various components and terminologies:

1. Node: Each element in the tree is a node, which holds some data and has references (pointers) to its parent and children nodes.
2. Edge: The lines connecting the nodes, representing the relationships between parent and child nodes.
3. Root: The topmost node of the tree with no parent. It serves as the starting point for traversing the tree.
4. Leaves: Nodes with no children in the tree are called leaf nodes.
5. Subtree: A subtree is a portion of the tree that consists of a node and all its descendants.

Trees can be classified into various types based on their characteristics:

- Binary Tree: A tree in which each node has at most two children (left child and right child).
- Binary Search Tree (BST): A binary tree where for every node, the left child's value is less than the node's value, and the right child's value is greater than the node's value.
- Balanced Tree: A tree in which the heights of the left and right subtrees of every node differ by at most one, ensuring more efficient operations.
- Full Binary Tree: A binary tree in which each node has either zero or two children.
- Complete Binary Tree: A binary tree in which all levels are completely filled, except possibly the last level, and all nodes on the last level are as far left as possible.
- B-Tree: A balanced tree that is used to organize large amounts of data, commonly used in databases and file systems.

Trees are used in various applications such as hierarchical data representation, file systems, organization charts, parsing expressions, and searching algorithms. They provide efficient data access, insertion, and deletion operations when balanced, making them an essential data structure in computer science and software development.

Implementing a basic tree data structure in JavaScript can be achieved using a Node class to represent individual nodes and a Tree class to manage the tree. For simplicity, let's create a binary tree where each node can have at most two children: a left child and a right child.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (!node) {
      return false;
    }

    if (node.data === data) {
      return true;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  inOrderTraversal() {
    const result = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  inOrderTraversalNode(node, result) {
    if (node) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.data);
      this.inOrderTraversalNode(node.right, result);
    }
  }
}

// Usage:
const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);

console.log(tree.search(40)); // Output: true
console.log(tree.search(60)); // Output: false

console.log(tree.inOrderTraversal()); // Output: [20, 30, 40, 50, 70]

/*
In this implementation, the `Node` class represents individual nodes of the binary tree, and the `BinaryTree` class is used to manage the tree. The `insert` method inserts new nodes into the binary tree, the `search` method searches for a specific value in the tree, and the `inOrderTraversal` method performs an in-order traversal of the tree, which visits nodes in ascending order.

Please note that this implementation is a basic example to illustrate the binary tree data structure. Depending on your requirements, you can extend the implementation with additional functionalities and various tree traversal algorithms such as pre-order and post-order traversals.
*/