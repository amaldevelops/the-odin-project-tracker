//2024 Amal Kariyawasam, Merge Sort Algorithm

// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
// Tips:

// Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

/* Pseudo Code
* Divide the given array into left half and right half
* Sort the left half of the array 
* Sort the right half of the array
* Merge the left half and right half  
Get the input array length

*/

/**
 * Merge Sort Algorithm Implementation
 *
 * The merge sort algorithm follows a divide-and-conquer approach:
 * 1. Divide the array into two halves.
 * 2. Recursively sort both halves.
 * 3. Merge the sorted halves back together.
 */

/**
 * Merge Sort Algorithm Implementation
 *
 * The merge sort algorithm follows a divide-and-conquer approach:
 * 1. Divide the array into two halves.
 * 2. Recursively sort both halves.
 * 3. Merge the sorted halves back together.
 */

function mergeSort(arr) {
  // Base case: if the array has one or zero elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle point of the array to split it into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); // Left half
  const right = arr.slice(mid); // Right half

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge Function
 *
 * This function merges two sorted arrays into one sorted array.
 *
 * @param {Array} left - The left sorted array
 * @param {Array} right - The right sorted array
 * @returns {Array} - The merged and sorted array
 */
function merge(left, right) {
  let sortedArray = [];

  // While both arrays have elements
  while (left.length && right.length) {
    // Compare the first elements of both arrays and push the smaller one to sortedArray
    if (left[0] < right[0]) {
      sortedArray.push(left.shift()); // Remove the first element from left and add it to sortedArray
    } else {
      sortedArray.push(right.shift()); // Remove the first element from right and add it to sortedArray
    }
  }

  // Concatenate the remaining elements of left or right to sortedArray
  return sortedArray.concat(left.slice()).concat(right.slice());
}

// Test the mergeSort function
const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];

console.log(mergeSort(test1)); // should return [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(test2)); // should return [79, 100, 105, 110]
