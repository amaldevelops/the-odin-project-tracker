// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

/*Pseudo Code
Check to see IF year can be divided by 4 IF true run following 
    IF it can be divided by 100 then run following
        check IF Year can be divided by 400, IF so RETURN TRUE 
        ELSE Return false
    ELSE return True
ELSE return False 
            1996 = True
            34992 = True
*/

const leapYears = function(year) {

    
    if (year%4==0)
        {
            if (year%100==0)
            {
                if (year%400==0)
                {
                    return true;
                }


                else 
                {
                    return false;
                }
            } 

            else 
            {
                return true;
            }



        }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
