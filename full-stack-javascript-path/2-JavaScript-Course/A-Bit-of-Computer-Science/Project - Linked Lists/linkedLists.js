// 2024, Amal Kariyawasam

// Project: Linked Lists
/*
You will need two classes or factories:

1) LinkedList class / factory, which will represent the full list.
2) Node class / factory, containing a value property and a link to the nextNode, set both as null by default.


Build the following functions in your linked list class / factory:

1) append(value) adds a new node containing value to the end of the list
2) prepend(value) adds a new node containing value to the start of the list
3) size returns the total number of nodes in the list
4) head returns the first node in the list
5) tail returns the last node in the list
6) at(index) returns the node at the given index
7) pop removes the last element from the list
8) contains(value) returns true if the passed in value is in the list and otherwise returns false.
9) find(value) returns the index of the node containing value, or null if not found.
10) toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

Extra credit
1) insertAt(value, index) that inserts a new node with the provided value at the given index.
2) removeAt(index) that removes the node at the given index.

Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
*/

// Node class represents an individual node in the linked list
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value; // The value stored in the node
    this.nextNode = nextNode; // Reference to the next node in the list
  }
}

// LinkedList class represents the entire linked list
class LinkedList {
  constructor() {
    this.headNode = null; // The head (first node) of the list
  }

  // Adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) { // If the list is empty
      this.headNode = newNode; // Set the new node as the head
      return;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode) { // Traverse to the end of the list
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode; // Link the last node to the new node
  }

  // Adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.headNode); // Create a new node pointing to the current head
    this.headNode = newNode; // Set the new node as the head
  }

  // Returns the total number of nodes in the list
  size() {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode) { // Traverse the list and count nodes
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  // Returns the first node in the list
  head() {
    return this.headNode;
  }

  // Returns the last node in the list
  tail() {
    let currentNode = this.headNode;
    if (!currentNode) return null; // If the list is empty
    while (currentNode.nextNode) { // Traverse to the last node
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // Returns the node at the given index
  at(index) {
    let currentNode = this.headNode;
    let count = 0;
    while (currentNode) { // Traverse the list
      if (count === index) return currentNode; // Return the node if the index matches
      count++;
      currentNode = currentNode.nextNode;
    }
    return null; // If the index is out of bounds
  }

  // Removes the last element from the list
  pop() {
    if (!this.headNode) return; // If the list is empty
    if (!this.headNode.nextNode) { // If there's only one node
      this.headNode = null; // Remove the head
      return;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode.nextNode) { // Traverse to the second last node
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null; // Remove the last node
  }

  // Returns true if the passed in value is in the list, otherwise returns false
  contains(value) {
    let currentNode = this.headNode;
    while (currentNode) { // Traverse the list
      if (currentNode.value === value) return true; // If the value matches
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    let currentNode = this.headNode;
    let index = 0;
    while (currentNode) { // Traverse the list
      if (currentNode.value === value) return index; // If the value matches
      index++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  // Represents the linked list as a string in the format: ( value ) -> ( value ) -> null
  toString() {
    let result = "";
    let currentNode = this.headNode;
    while (currentNode) { // Traverse the list
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return result + "null"; // Append 'null' to indicate the end of the list
  }

  // Inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index === 0) { // If inserting at the head
      this.prepend(value);
      return;
    }
    const previousNode = this.at(index - 1); // Get the node before the insertion point
    if (!previousNode) return; // If the index is out of bounds
    const newNode = new Node(value, previousNode.nextNode); // Create the new node
    previousNode.nextNode = newNode; // Link the previous node to the new node
  }

  // Removes the node at the given index
  removeAt(index) {
    if (index === 0) { // If removing the head
      if (this.headNode) this.headNode = this.headNode.nextNode; // Set the head to the next node
      return;
    }
    const previousNode = this.at(index - 1); // Get the node before the removal point
    if (!previousNode || !previousNode.nextNode) return; // If the index is out of bounds or last node
    previousNode.nextNode = previousNode.nextNode.nextNode; // Link the previous node to the node after the removed node
  }
}

// Example usage:
const list = new LinkedList();
list.append(10); // Adds 10 to the end of the list
list.append(20); // Adds 20 to the end of the list
list.append(30); // Adds 30 to the end of the list
// list.prepend(5); // Adds 5 to the start of the list
// console.log(list.toString()); // Outputs: ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null
// console.log(list.size()); // Outputs: 4
console.log(list.head().value); // Outputs: 5
// console.log(list.tail().value); // Outputs: 30
console.log(list.at(2).value); // Outputs: 20
// list.pop(); // Removes the last element (30) from the list
// console.log(list.toString()); // Outputs: ( 5 ) -> ( 10 ) -> ( 20 ) -> null
// console.log(list.contains(10)); // Outputs: true
// console.log(list.find(20)); // Outputs: 2
// list.insertAt(15, 2); // Inserts 15 at index 2
console.log(list.toString()); // Outputs: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null
// list.removeAt(2); // Removes the element at index 2 (15)
// console.log(list.toString()); // Outputs: ( 5 ) -> ( 10 ) -> ( 20 ) -> null

console.log(list)

