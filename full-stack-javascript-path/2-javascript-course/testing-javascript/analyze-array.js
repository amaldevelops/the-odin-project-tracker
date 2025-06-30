/*
An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and 
length.
*/

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//    average: 4,
//    min: 1,
//    max: 8,
//    length: 6
// };

class analyzeArray {
  constructor(arrayToAnalyze) {
    this.arrayToAnalyze = arrayToAnalyze;
    this.arrayToAnalyzeLength = this.arrayToAnalyze.length;
  }

  average() {
    let averageSum = 0;
    for (let i = 0; i < this.arrayToAnalyzeLength; i++) {
      averageSum = averageSum + this.arrayToAnalyze[i];
    }
    return averageSum / this.arrayToAnalyzeLength;
  }

  min() {
    this.arrayToAnalyze.sort((a, b) => a + b);
    return this.arrayToAnalyze[0];
  }

  max() {
    this.arrayToAnalyze.sort((a, b) => a - b);
    return this.arrayToAnalyze[this.arrayToAnalyze.length - 1];
  }

  length() {
    return this.arrayToAnalyzeLength;
  }

  returnObject() {
    const returnedObject = {
      average: this.average(),
      min: this.min(),
      max: this.max(),
      length: this.length(),
    };
    return returnedObject;
  }
}

export { analyzeArray };
