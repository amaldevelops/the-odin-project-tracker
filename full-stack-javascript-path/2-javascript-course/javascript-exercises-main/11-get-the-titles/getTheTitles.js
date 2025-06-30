const getTheTitles = function(books) {

let getTheTitles=[];

for (let bookTitles in books)
{
  getTheTitles.push(books[bookTitles].title); 

}
return getTheTitles;

}
// Do not edit below this line
module.exports = getTheTitles;
