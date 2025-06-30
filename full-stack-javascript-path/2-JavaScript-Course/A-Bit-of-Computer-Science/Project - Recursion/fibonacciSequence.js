//2024 Amal Kariyawasam, Fibonacci Number Calculation

// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another function fibsRec which solves the same problem recursively.
// Test both versions of your functions by passing in various lengths as arguments
// Explanation below link
// https://www.scaler.com/topics/fibonacci-series-in-javascript/

// Using Iterative Method
function fibs(num) {
  console.log("Hello Node, This is Fibonacci using Iterative Method !");

  let previousNum1 = 0;
  let previousNum2 = 1;
  let currentNum;
  const fibonacciArray = [0, 1];

  for (let i = 2; i < num; i++) {
    currentNum = previousNum1 + previousNum2;
    previousNum1 = previousNum2;
    previousNum2 = currentNum;
    fibonacciArray.push(currentNum);
  }

  console.log(fibonacciArray);
}

fibs(8);

// Using Recursive Method

function fibsRec(Fn) {
  const fibonacciArray = [0, 1]; // Base cases

  // Iteratively calculate and store Fibonacci numbers up to Fn
  for (let i = 2; i < Fn; i++) {
    // Check if the value is already calculated (in case of previous function calls)
    if (fibonacciArray[i] === undefined) {
      fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
  }
  console.log("Hello Node, This is Fibonacci using Recursive Method");
  return fibonacciArray;
}

// Call the function with the desired nth term
const result = fibsRec(8);
console.log(result); // This will print [0, 1, 1, 2, 3, 5, 8, 13]
