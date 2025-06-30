/*
Get the string and store each character in an array
Store the alphabet in an array
Search for each letter of the string in the array
and get the alphabet arrays array number
Add the shiftFactor to the array Number and display the character at that array number
Store the new letter into a text and return it
*/

function caesarCipher(string, shiftFactor) {
  const cipherText = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const stringArray = string.split("");
  let ceaserCipheredTextIndex;
  let ceaserCipheredText = [];

  for (let i = 0; i < stringArray.length; i++) {
    let findTheIndex = cipherText.indexOf(stringArray[i]);
    ceaserCipheredTextIndex = findTheIndex + shiftFactor;

    if (findTheIndex == -1) {
      ceaserCipheredText.push(stringArray[i]);
    } else if (ceaserCipheredTextIndex > 50) {
      let roundIndex = (ceaserCipheredTextIndex % 52) + 26;
      ceaserCipheredText.push(cipherText[roundIndex]);
    } else {
      ceaserCipheredText.push(cipherText[ceaserCipheredTextIndex]);
    }
  }
  return ceaserCipheredText.join("");
}
export { caesarCipher };
