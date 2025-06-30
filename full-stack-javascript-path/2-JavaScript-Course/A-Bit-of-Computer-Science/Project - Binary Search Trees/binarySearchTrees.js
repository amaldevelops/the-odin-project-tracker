// 2024, Amal Kariyawasam


// Node class represents each node in the binary search tree
class Node {
  constructor(data) {
    this.data = data;   // Data stored in the node
    this.left = null;   // Reference to the left child
    this.right = null;  // Reference to the right child
  }
}

// Tree class encapsulates operations for the binary search tree
class Tree {
  constructor(array) {
    // Initialize the tree by building it from a given array
    this.root = this.buildTree(array);
  }

  // Function to build a balanced binary search tree from an array
  buildTree(array) {
    // Remove duplicates and sort the array
    array = [...new Set(array)].sort((a, b) => a - b);
    // Recursively build the tree and return the root node
    return this.buildTreeRecursive(array);
  }

  // Recursive function to build the tree
  buildTreeRecursive(array) {
    if (array.length === 0) return null; // Base case

    const mid = Math.floor(array.length / 2); // Find the middle element
    const root = new Node(array[mid]); // Create a new node with the middle element

    // Recursively build the left and right subtrees
    root.left = this.buildTreeRecursive(array.slice(0, mid));
    root.right = this.buildTreeRecursive(array.slice(mid + 1));

    return root; // Return the root node
  }

  // Function to insert a value into the tree
  insert(value, node = this.root) {
    if (!node) return new Node(value); // If node is null, create a new node

    // Traverse the tree to find the correct location for the new value
    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node; // Return the updated node
  }

  // Function to delete a value from the tree
  deleteItem(value, node = this.root) {
    if (!node) return node; // Base case

    // Traverse the tree to find the node to delete
    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      // Node with only one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      node.data = this.minValue(node.right);
      // Delete the inorder successor
      node.right = this.deleteItem(node.data, node.right);
    }

    return node; // Return the updated node
  }

  // Function to find the minimum value in a tree
  minValue(node) {
    let min = node.data;
    while (node.left) {
      node = node.left;
      min = node.data;
    }
    return min;
  }

  // Function to find a node with a given value
  find(value, node = this.root) {
    if (!node || node.data === value) return node; // Base case

    // Traverse the tree to find the value
    if (value < node.data) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }

  // Function to perform level-order traversal
  levelOrder(callback) {
    if (!this.root) return;

    const queue = [this.root]; // Initialize the queue with the root
    const result = [];

    while (queue.length) {
      const node = queue.shift(); // Get the front node from the queue

      if (callback) callback(node);
      else result.push(node.data);

      if (node.left) queue.push(node.left); // Add left child to the queue
      if (node.right) queue.push(node.right); // Add right child to the queue
    }

    if (!callback) return result; // Return the result if no callback is provided
  }

  // Function to perform in-order traversal
  inOrder(callback, node = this.root, result = []) {
    if (!node) return;

    this.inOrder(callback, node.left, result); // Traverse left subtree

    if (callback) callback(node);
    else result.push(node.data);

    this.inOrder(callback, node.right, result); // Traverse right subtree

    if (!callback) return result; // Return the result if no callback is provided
  }

  // Function to perform pre-order traversal
  preOrder(callback, node = this.root, result = []) {
    if (!node) return;

    if (callback) callback(node);
    else result.push(node.data);

    this.preOrder(callback, node.left, result); // Traverse left subtree
    this.preOrder(callback, node.right, result); // Traverse right subtree

    if (!callback) return result; // Return the result if no callback is provided
  }

  // Function to perform post-order traversal
  postOrder(callback, node = this.root, result = []) {
    if (!node) return;

    this.postOrder(callback, node.left, result); // Traverse left subtree
    this.postOrder(callback, node.right, result); // Traverse right subtree

    if (callback) callback(node);
    else result.push(node.data);

    if (!callback) return result; // Return the result if no callback is provided
  }

  // Function to calculate the height of a node
  height(node) {
    if (!node) return -1; // Base case

    // Calculate the height of the left and right subtrees
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    // Height is the maximum height of the left or right subtree plus one
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Function to calculate the depth of a node
  depth(node, root = this.root, d = 0) {
    if (!root) return -1; // Base case

    if (root.data === node.data) return d; // If node is found, return depth

    // Traverse the tree to find the node and calculate depth
    if (node.data < root.data) {
      return this.depth(node, root.left, d + 1);
    } else {
      return this.depth(node, root.right, d + 1);
    }
  }

  // Function to check if the tree is balanced
  isBalanced(node = this.root) {
    if (!node) return true; // Base case

    // Calculate the height of the left and right subtrees
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    // Check if the current node is balanced and recursively check its children
    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // Function to rebalance the tree
  rebalance() {
    const values = this.inOrder(); // Get the in-order traversal of the tree
    this.root = this.buildTree(values); // Rebuild the tree using the sorted values
  }
}

// Helper function to pretty print the tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// Driver script to test the tree implementation
const randomArray = (length, max) => 
  Array.from({ length }, () => Math.floor(Math.random() * max));

// Create a tree with random numbers
const tree = new Tree(randomArray(15, 100));

console.log("Tree is balanced:", tree.isBalanced()); // Check if the tree is balanced
console.log("Level Order:", tree.levelOrder()); // Print level-order traversal
console.log("In Order:", tree.inOrder()); // Print in-order traversal
console.log("Pre Order:", tree.preOrder()); // Print pre-order traversal
console.log("Post Order:", tree.postOrder()); // Print post-order traversal

prettyPrint(tree.root); // Pretty print the tree

// Add elements greater than 100 to unbalance the tree
tree.insert(150);
tree.insert(200);
tree.insert(250);

console.log("\nTree after adding > 100 elements:");
prettyPrint(tree.root);

console.log("Tree is balanced:", tree.isBalanced()); // Check if the tree is balanced

// Rebalance the tree
tree.rebalance();

console.log("\nTree after rebalancing:");
prettyPrint(tree.root);

console.log("Tree is balanced:", tree.isBalanced()); // Check if the tree is balanced
console.log("Level Order:", tree.levelOrder()); // Print level-order traversal
console.log("In Order:", tree.inOrder()); // Print in-order traversal
console.log("Pre Order:", tree.preOrder()); // Print pre-order traversal
console.log("Post Order:", tree.postOrder()); // Print post-order traversal
