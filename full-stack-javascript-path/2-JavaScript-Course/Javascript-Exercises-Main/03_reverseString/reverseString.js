const reverseString = function(reverseThis) {
// return ("olleh")
var splitString=reverseThis.split(""); //This Line will split the string into an array
var reversedString=splitString.reverse();// This line will reverse the array
var joinedArray=reversedString.join(""); // This line will join the reversed array into an string
return (joinedArray); //This will return final result to the function
};

// Do not edit below this line
module.exports = reverseString;
