const repeatString = function(string,num) {
    let returnString="";
    if (num<0){
        returnString="ERROR"; // If negative number output error
              }

    else      { //If positive number run below loop
                for (let i=0; i<num; i++) // for loop to repeat until it reaches given number
              {
                returnString=returnString.concat(string); //Add string value after each loop iteration
              }

              }

        
     
    return (returnString); // Return the final string
};


// Do not edit below this line
module.exports = repeatString;
