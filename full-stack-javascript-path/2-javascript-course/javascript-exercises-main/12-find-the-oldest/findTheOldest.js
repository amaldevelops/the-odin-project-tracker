const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  const findTheOldest = function(people) {
   
    let birthYears=[];
    let ages=[];
    let key;
        
    for (key in people){
  
          if (people[key].yearOfDeath===undefined)
            {
              const d = new Date();
              let year = d.getFullYear();
              let currentlyLiving=year-people[key].yearOfBirth;
              people[key].age=currentlyLiving;
              ages.push(currentlyLiving);
        
            }
        
          else{
            let currentlyLiving2=((people[key].yearOfDeath)-(people[key].yearOfBirth));
  
            people[key].age=currentlyLiving2;
            ages.push(currentlyLiving2);
  
          }
          // console.log(people[key].age);
                  
    }
  
    function largestOfFour(mainArray) {
      return mainArray.map(function (subArray){
        return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
          return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
        }, 0);
      });
    }
  
  
  let largestAge=largestOfFour([ages]);
  let indexNo=ages.indexOf(largestAge[0]);
  
  // console.log(largestAge[0])
  // console.log(people);
  
  // console.log(indexNo);
  // console.log(people[indexNo]);
  
    
  return people[indexNo];
  
  
      };


// Do not edit below this line
module.exports = findTheOldest;
