const palindromes = function (stringToTest) {
const regExpression=/[\W_]/g;
let stringToTestLowerCase=stringToTest.toLowerCase().replace(regExpression,'');
let reverseString=stringToTestLowerCase.split('').reverse().join('');
return stringToTestLowerCase===reverseString;
};

// Do not edit below this line
module.exports = palindromes;
