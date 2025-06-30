const removeFromArray = function(inputArray,...numbersToRemove) {

const filteredArray=inputArray.filter(findNumber);

function findNumber(numberReq) {
return (!numbersToRemove.includes(numberReq));

}

    return (filteredArray);
};

// Do not edit below this line
module.exports = removeFromArray;
