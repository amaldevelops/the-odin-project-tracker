// Farenhit to Celsius
// X Faranheit=(X-32)x5/9Centigrade
const convertToCelsius = function(temperatureInFahrenheit) {
let temperatureInCelsius = (temperatureInFahrenheit-32)*(5/9);
return (Math.round(temperatureInCelsius*10)/10);

};

//Celsius to Farenheit
// X Celsius ==((Xx(9/5))+32) Farenheit
const convertToFahrenheit = function(temperatureInCelsius2) {
let temperatureInFahrenheit2=((temperatureInCelsius2*(9/5))+32);
return (Math.round(temperatureInFahrenheit2*10)/10);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
