// 2024, Amal Kariyawasam

/*
Assignment
Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
Sometimes there is more than one fastest path. Examples of this are shown below. Any answer is correct as long as it follows the rules and gives the shortest possible path.

knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
Think about the rules of the board and knight, and make sure to follow them.
For every square there is a number of possible moves, choose a data structure that will allow you to work with them. Don't allow any moves to go off the board.
Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
  > knightMoves([3,3],[4,3])
  => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]
*/

/*Pseudo Code
Possible Moves for a Knight:

The directions array lists all 8 possible moves for a knight on a chessboard.
Each element is a pair [dx, dy] representing a change in x and y coordinates.

isValid Function:
Checks if a given position [x, y] is within the bounds of an 8x8 chessboard.
Returns true if the position is valid, false otherwise.
reconstructPath Function:

Takes a parentMap and an end position.
Starts from the end position and traces back to the start using the parentMap.
Constructs the path by adding each position to the beginning of the path array.
Returns the reconstructed path.
BFS Initialization:

queue is initialized with the starting position [start, null]. The null indicates that the start position has no parent.
visited is a Set to keep track of visited positions to avoid revisiting them.
parentMap is an object to track the parent of each position for path reconstruction.
BFS Loop:

While the queue is not empty:
Dequeue the first element, which contains the current position and its parent.
If the current position has not been visited:
Mark it as visited and record its parent.
If the current position is the end position:
Reconstruct and print the path, then return it.
For each possible move of the knight:
Calculate the new position.
If the new position is valid, enqueue it with the current position as its parent.
Example Usage:

Calls to knightMoves with different start and end positions demonstrate the function's capability to find the shortest path for a knight on a chessboard.

*/

function knightMoves(start, end) {
    // Possible moves for a knight in chess
    const directions = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
  
    // Helper function to check if a position is within the board boundaries
    function isValid(x, y) {
      return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
  
    // Helper function to reconstruct the path from the parent map
    function reconstructPath(parentMap, end) {
      let path = [];
      let current = end;
      while (current) {
        // Add the current position to the beginning of the path array
        path.unshift(current);
        // Move to the parent of the current position
        current = parentMap[current];
      }
      return path;
    }
  
    // Initialize the queue with the starting position and no parent
    let queue = [[start, null]];
    // Set to keep track of visited positions
    let visited = new Set();
    // Map to track the parent of each position for path reconstruction
    let parentMap = {};
  
    // BFS loop
    while (queue.length > 0) {
      // Dequeue the first element in the queue
      let [current, parent] = queue.shift();
      let [x, y] = current;
  
      // Check if the current position has been visited
      if (!visited.has(current.toString())) {
        // Mark the current position as visited
        visited.add(current.toString());
        // Record the parent of the current position
        parentMap[current] = parent;
  
        // Check if the current position is the end position
        if (x === end[0] && y === end[1]) {
          // Reconstruct the path from start to end
          let path = reconstructPath(parentMap, current);
          console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
          // Print the path
          path.forEach(pos => console.log(pos));
          return path;
        }
  
        // Loop through all possible knight moves
        for (let [dx, dy] of directions) {
          let newX = x + dx;
          let newY = y + dy;
          // Check if the new position is within the board boundaries
          if (isValid(newX, newY)) {
            // Enqueue the new position with the current position as its parent
            queue.push([[newX, newY], current]);
          }
        }
      }
    }
  }
  
  // Example usage:
  knightMoves([0, 0], [1, 9]); // Output: You made it in 1 moves! Here's your path: [0, 0] [1, 2]
  knightMoves([0, 0], [3, 3]); // Output: You made it in 2 moves! Here's your path: [0, 0] [2, 1] [3, 3]
  knightMoves([3, 3], [0, 0]); // Output: You made it in 2 moves! Here's your path: [3, 3] [1, 2] [0, 0]
  knightMoves([0, 0], [1, 7]); // Output: You made it in 6 moves! Here's your path: [0, 0] [2, 1] [4, 2] [6, 3] [7, 5] [5, 6] [7, 7]
  