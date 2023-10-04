/*
A graph is a versatile and fundamental data structure that represents a collection of nodes (also known as vertices) and the connections between them (known as edges). Graphs are used to model and represent various relationships, connections, and networks in real-world scenarios. They provide a powerful way to analyze and solve complex problems in areas such as computer networking, social networks, transportation systems, and more.

Graphs can be classified into two main categories based on the nature of their edges:

1. Directed Graph (Digraph): In a directed graph, edges have a direction associated with them. This means that the edge connecting node A to node B is different from the edge connecting node B to node A. The edges are represented as ordered pairs (A, B), indicating that there's a directed connection from A to B.

2. Undirected Graph: In an undirected graph, edges have no direction. The edge between node A and node B is the same as the edge between node B and node A. The edges are represented as unordered pairs {A, B}.

Graphs can also have various properties, such as weighted edges (edges with associated weights or costs) and cycles (loops within the graph). Additionally, graphs can be further classified based on their structure:

- Sparse Graph: A graph in which the number of edges is much smaller than the maximum number of edges possible between the given nodes.

- Dense Graph: A graph in which the number of edges is close to the maximum number of edges possible between the given nodes.

Here's a basic implementation of an undirected graph using an adjacency list representation in JavaScript:
*/

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(node1, node2) {
    this.nodes.get(node1).push(node2);
    this.nodes.get(node2).push(node1);
  }

  getNeighbors(node) {
    return this.nodes.get(node);
  }
}

// Usage:
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

console.log(graph.getNeighbors("A")); // Output: ["B"]
console.log(graph.getNeighbors("B")); // Output: ["A", "C"]
console.log(graph.getNeighbors("C")); // Output: ["B"]

/*
In this implementation, the `Graph` class uses an adjacency list to represent the graph, where each node is associated with a list of its neighboring nodes. The `addNode` method adds nodes to the graph, the `addEdge` method adds edges between nodes, and the `getNeighbors` method retrieves the neighbors of a given node.

Keep in mind that this is a basic example of a graph implementation. Depending on your requirements, you can extend the implementation to include additional features, such as handling directed graphs, weighted edges, and more advanced graph algorithms like depth-first search (DFS) and breadth-first search (BFS).
*/