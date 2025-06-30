/*

Code snippet evaluation space made by Amal, 2024
You can out put to the HTML page By;

const codeOutput=document.querySelector('.codeOutput')
codeOutput.textContent=[Code to be output];

or
console.log();
                           _ _        _____          _              _                                             _   _ 
     /\                   | ( )      / ____|        | |            | |                                           | | | |
    /  \   _ __ ___   __ _| |/ ___  | |     ___   __| | ___   _ __ | | __ _ _   _  __ _ _ __ ___  _   _ _ __   __| | | |
   / /\ \ | '_ ` _ \ / _` | | / __| | |    / _ \ / _` |/ _ \ | '_ \| |/ _` | | | |/ _` | '__/ _ \| | | | '_ \ / _` | | |
  / ____ \| | | | | | (_| | | \__ \ | |___| (_) | (_| |  __/ | |_) | | (_| | |_| | (_| | | | (_) | |_| | | | | (_| | |_|
 /_/    \_\_| |_| |_|\__,_|_| |___/  \_____\___/ \__,_|\___| | .__/|_|\__,_|\__, |\__, |_|  \___/ \__,_|_| |_|\__,_| (_)
                                                             | |             __/ | __/ |                                
                                                             |_|            |___/ |___/                                 
*/
// DO NOT CHANGE BELOW CODE

const codeOutput = document.querySelector(".codeOutput");
const codeOutPutActivate=document.querySelector(".activateCodeOutput")
codeOutPutActivate.textContent="Code Output Activated, to use the code out put assign required output to codeOut.textContent=[Code to be output];";


//*.*.*.*.*.*.*.*.*.*.*.*.*.Enter the code below*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.

/*
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange(number)
{
if (number===1)
  {
    return 1; 
  }

  else {
    return number + sumRange(number-1);
  }
}

// codeOutput.textContent=sumRange(4);

/*
Question 2: Power function
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

Sample:

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
*/

function power(base, exp)
{
  if (exp===0)
    {
      return 1
    }

    else {
      return base * power(base,exp-1)
    }
}

// codeOutput.textContent=power(10,2);



/*
Question 3: Calculate factorial
Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

Sample:

factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
*/

function factor(num)
{
  if (num==1)
    {
      return 1;
    }
    else{
      return num * factor(num-1) 
    }
    
}


// codeOutput.textContent=factor(3);

/*
Question 4: Check all values in an array
Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

Sample:


*/

var allAreLessThanSeven = all([1,2,5], function(num){
	return num < 7;
});

// console.log(allAreLessThanSeven); // false

function all(array, callback){
	var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}
}

// console.log(allAreLessThanSeven); // false
// codeOutput.textContent=allAreLessThanSeven;

/*
Question 5: Product of an array
Write a function called productOfArray which takes in an array of numbers and returns the product of them all

Sample:

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60
*/

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

codeOutput.textContent=six +"  " + sixty;

console.log(six, sixty);

function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
}

/*
Question 6: Search JS object
Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

Sample:
*/
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}



let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(object, searchValue) {
  if (typeof object !== "object" || object === null) {
    return object === searchValue;
  }

  for (const value of Object.values(object)) {
    if (contains(value, searchValue)) {
      console.log(value)
      return true;
    }
  }
  return false;
}

console.log(doesntHaveIt);

/*
Question 7: Parse a multi-dimensional array
Given a multi-dimensional integer array, return the total number of integers stored inside this array

Sample:
*/
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

/*
Question 8:
Write a function that sums squares of numbers in list that may contain more lists

Sample:
*/  
var l = [1,2,3]; 
console.log(SumSquares(l)); // 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 400

function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} 
    else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}



/*
Question 9:
The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

Sample:
*/

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}
