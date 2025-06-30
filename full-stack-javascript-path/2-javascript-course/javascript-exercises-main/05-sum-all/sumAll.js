/* Pseudo Code
Num1=1
Num2=4
To add everything between Num1 and Num2
SumAll=1
sumAll=sumAll+2
sumAll=Sumall+3
sumAll=Sumall+4
*/
const sumAll = function(num1,num2) {
    let sumNum=0;
        if (num1<num2){
        for (let i=num1; i<=num2; i++)
            {
            sumNum+=i;     
            }
                    }
    if (num1>num2) {
        for (let i=num2; i<=num1; i++)
        {
            sumNum+=i; 

        }
        }
        
    
    if (num1<0)
    {
        return ("ERROR");
    }

    if (typeof num2==="string") {

        return ("ERROR");
    }

    if (typeof num2==="object")
    {
        return ("ERROR");
    }


    return sumNum;       
      
};

// Do not edit below this line
module.exports = sumAll;
