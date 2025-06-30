/*

Code snippet evaluation space made by Amal 2024
You can out put to the HTML page By;

const codeOutput=document.querySelector('.codeOutput')
codeOutput.textContent=[Code to be output];

or
console.log();
                           _ _        _____          _              _                                             _   _ 
     /\                   | ( )      / ____|        | |            | |                                           | | | |
    /  \   _ __ ___   __ _| |/ ___  | |     ___   __| | ___   _ __ | | __ _ _   _  __ _ _ __ ___  _   _ _ __   __| | | |
   / /\ \ | '_ ` _ \ / _` | | / __| | |    / _ \ / _` |/ _ \ | '_ \| |/ _` | | | |/ _` | '__/ _ \| | | | '_ \ / _` | | |
  / ____ \| | | | | | (_| | | \__ \ | |___| (_) | (_| |  __/ | |_) | | (_| | |_| | (_| | | | (_) | |_| | | | | (_| | |_|
 /_/    \_\_| |_| |_|\__,_|_| |___/  \_____\___/ \__,_|\___| | .__/|_|\__,_|\__, |\__, |_|  \___/ \__,_|_| |_|\__,_| (_)
                                                             | |             __/ | __/ |                                
                                                             |_|            |___/ |___/                                 
*/
// DO NOT CHANGE BELOW CODE

const codeOutput = document.querySelector(".codeOutput");
const codeOutPutActivate=document.querySelector(".activateCodeOutput")
codeOutPutActivate.textContent="Code Output Activated, to use the code out put assign required output to codeOut.textContent=[Code to be output];";


//*.*.*.*.*.*.*.*.*.*.*.*.*.Enter the code below*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.

// function square(x) {
//   return x * x;
// }

square =(x)=>x*x;
console.log(square(5));


// let user = {
//   name: "John",
//   surname: "Smith"
// };

// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// });

// alert(user.fullName); // John Smith

// for(let key5 in user) alert(key5); // name, surname


// function createUser (name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });
// // logs { discordName: "@josh", reputation: 2 }
// function createPlayer (name, level) {
//   const { getReputation, giveReputation } = createUser(name);

//   const increaseLevel = () => level++;
//   return { name, getReputation, giveReputation, increaseLevel };
// }

// function createPlayer (name, level) {
//   const user = createUser(name);

//   const increaseLevel = () => level++;
//   return Object.assign({}, user, { increaseLevel });
// }

// function createUser (name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;
//   const takeReputation=()=>reputation--;

//   return { name, discordName, getReputation, giveReputation, takeReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();
// josh.takeReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });
// logs { discordName: "@josh", reputation: 2 }


// const obj = { a: 1, b: 2,c:5 };
// const { a, c } = obj;
// // This creates two variables, a and b,
// // which are equivalent to
// // const a = obj.a;
// // const b = obj.b;

// const array = [1, 2, 3, 4, 5];
// const [ zerothEle, firstEle ] = array;
// // This creates zerothEle and firstEle, both of which point
// // to the elements in the 0th and 1st indices of the array




// const name = "Bob";
// const age = 28;
// const color = "red";

// const nowFancyObject = { name, age, color };


// console.log(nowFancyObject);
// console.log({name, age, color});




// let globalAge = 23; // This is a global variable

// // This is a function - and hey, a curly brace indicating a block
// function printAge (age) {
//   var varAge = 34; // This is a function scoped variable

//   // This is yet another curly brace, and thus a block
//   if (age > 0) {
//     // This is a block-scoped variable that exists
//     // within its nearest enclosing block, the if's block
//     const constAge = age * 2;
//     console.log(constAge);
//   }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  // console.log(constAge);
// }

// printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// // Don't do this!
// // Use Object.setPrototypeOf(Player.prototype, Person.prototype)
// Player.prototype = Person.prototype;

// function Enemy(name) {
//   this.name = name;
//   this.marker = '^';
// }

// // Not again!
// // Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
// Enemy.prototype = Person.prototype;

// Enemy.prototype.sayName = function() {
//   console.log('HAHAHAHAHAHA');
// };

// const carl = new Player('carl', 'X');
// carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!



// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// Player.prototype.getMarker = function() {
//   console.log(`My marker is '${this.marker}'`);
// };

// Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// // Now make `Player` objects inherit from `Person`
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype); // returns Person.prototype

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');

// player1.sayName(); // Hello, I'm steve!
// player2.sayName(); // Hello, I'm also steve!

// player1.getMarker(); // My marker is 'X'
// player2.getMarker(); // My marker is 'O'



// function score(quarter,score)
// {
//   this.quarter=quarter;
//   this.score=score;

//   this.scoreOutput=function(){
//     return this.quarter+" is "+this.score;
//     // return "Hello";

//   }
// }

// const playerScore=new score(3,23);

// console.log(playerScore.scoreOutput());
// // playerScore.scoreOutput;

// score.prototype.sayScore=function(){
// return (`Hi Mate your score is ${this.score}`) 



// }

// // console.log(playerScore.sayScore());

// Object.setPrototypeOf(Player.prototype, score.prototype);

// console.log(player1.sayScore());

// Player.prototype = Person.prototype;




// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
//   };
// }

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'


// Player.prototype.sayHello = function() {
//   console.log("Hello, I'm a player!");
// };

// Player.prototype.sayMarker=function(){
//   console.log("Marker is" + this.marker);
// };

// player1.sayHello(); // logs "Hello, I'm a player!"
// player2.sayHello(); // logs "Hello, I'm a player!"

// player1.sayMarker();

// player1.__proto__ === Player.prototype; // returns true
// player2.__proto__ === Player.prototype; // returns true





// function shoppingCart(itemName,ItemDescription,ItemPrice)
// {
//   this.itemName=itemName;
//   this.ItemDescription=ItemDescription;
//   this.ItemPrice=ItemPrice;
//   this.itemInfo=function(){
//     return this.itemName +" " + this.ItemDescription + " " + this.ItemPrice;
//   };
// }

// const pixel8Phone=new shoppingCart("Pixel 8","The best Smart phone in the world",1000);
// pixel8Phone.itemInfo();

// const thinkPadLaptop=new shoppingCart("Thinkpad L390 Yoga Laptop ","Highly capable laptop when paired with Linus",300);
// console.log(thinkPadLaptop.itemInfo());


// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
//   };
//   this.sayMarker=function(){
//     alert(this.name+" has a marker " + this.marker);
//   };
// }

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'
// player2.sayMarker();



// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// const player = new Player('Amal', 'X');

// codeOutput.textContent=player.name;

// console.log(player.name);




// const testing=function test1()
// {
//   console.log("Auto Function");
// }();

// ('World');

// function nonStrictSum(a, b) {
//     // non-strict mode
//     console.log(this === window); // => true
//     return a + b;
//   }
  
//   function strictSum(a, b) {
//     'use strict';
//     // strict mode is enabled
//     console.log(this === undefined); // => true
//     return a + b;
//   }
  
  // nonStrictSum() is invoked as a function in non-strict mode
  // this in nonStrictSum() is the window object
  // nonStrictSum(5, 6); // => 11
  
  // // strictSum() is invoked as a function in strict mode
  // // this in strictSum() is undefined
  // strictSum(8, 12); // => 20



// function multiply(a, b) {
//     'use strict'; // enable the strict mode
//     console.log(this === undefined); // => true
//     return a * b;
//   }
//   // multiply() function invocation with strict mode enabled
//   // this in multiply() is undefined
//   multiply(2, 5); // => 10


// function sum(a, b) {
//     // 'use strict'
//     console.log(this === window); // => true
//     this.myNumber = 20; // add 'myNumber' property to global object
//     return a + b;
//   }
//   // sum() is invoked as a function
//   // this in sum() is a global object (window)
//   sum(15, 16);     // => 31
//   console.log(window.myNumber); // => 20

//   console.log(this === window); // => true

// this.myString = 'Hello World!';
// console.log(window.myString); // => 'Hello World!'

// console.log(this === window); // => true



// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach=[food];
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // This one found the food
//   speedy.eat("apple");
//   alert( speedy.stomach ); // apple
  
//   // This one also has it, why? fix please.
//   alert( lazy.stomach ); // apple

//   const codeOut=document.querySelector('.codeOutput')
//   codeOut.innerHTML= hamster.stomach[0];
  



// let heads = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     // Object.setPrototypeOf(table.prototype,heads,prototype);
//     __proto__: heads
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table

//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__:bed
//   };

//   console.log(Object.getPrototypeOf(pockets.sheet));
//   const codeOut=document.querySelector('.codeOutput')


//   codeOut.innerHTML= pockets.glasses +" " + heads.glasses;


//   Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.


// // Initialize a constructor function for a new Hero
// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
//   }

// //   const hero1=new Hero("Amal",12);

//   Hero.prototype.greet=function()
//   {
//     return `${this.name} says hello`;
//   }


// // Initialize Warrior constructor
// function Warrior(name, level, weapon) {
//   // Chain constructor with call
//   Hero.call(this, name, level);

//   // Add a new property
//   this.weapon = weapon;
// }

// // Initialize Healer constructor
// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }


// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// }

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// }


// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below



// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
//   };
  
//   function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }
  
//   // Don't do this!
//   // Use Object.setPrototypeOf(Player.prototype, Person.prototype)
//   Player.prototype = Person.prototype;
  
//   function Enemy(name) {
//     this.name = name;
//     this.marker = '^';
//   }
  
//   // Not again!
//   // Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
//   Enemy.prototype = Person.prototype;
  
//   Enemy.prototype.sayName = function() {
//     console.log('HAHAHAHAHAHA');
//   };
  
//   const carl = new Player('carl', 'X');
//   carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!


// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
//   };
  
//   function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }
  
//   Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
//   };
  
//   // Object.getPrototypeOf(Player.prototype) should
//   // return the value of "Person.prototype" instead
//   // of "Object.prototype"
//   Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
//   // Now make `Player` objects inherit from `Person`
//   Object.setPrototypeOf(Player.prototype, Person.prototype);
//   Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
  
//   player1.sayName(); // Hello, I'm steve!
//   player2.sayName(); // Hello, I'm also steve!
  
//   player1.getMarker(); // My marker is 'X'
//   player2.getMarker(); // My marker is 'O'



// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
//   player1.sayName(); // logs 'steve'
//   player2.sayName(); // logs 'also steve'

// Object.getPrototypeOf(player1) === Player.prototype; // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true

// Player.prototype.sayHello = function() {
//     console.log("Hello, I'm a player!");
//  };
 
//  player1.sayHello(); // logs "Hello, I'm a player!"
//  player2.sayHello(); // logs "Hello, I'm a player!"


// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// Note: It is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:

// console.log(theHobbit.info());

// function Book(title, author,pages,read)

// {
// this.title=title,
// this.author=author,
// this.pages=pages,
// this.read=read;
// this.info=function(){
//     return (this.title+" by "+this.author+" "+this.pages+" Pages"+ " "+this.read);
// }
// }

// const Book1=new Book("Linux Cookbook","Schroder",654,"Not Yet read");

// console.log(Book1.info());



// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }



// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
//   }

// const myObject = {
//     property: 'Value!',
//     otherProperty: 77,
//     "obnoxious property": function hello() {
//       // do stuff!
//       alert("hello!");
//     },
//     anotherProp:function()
//     {
//         alert("This works")
//     }
//   };



// function sumOfTripledEvens(array) {
//     return array
//       .filter((num) => num % 2 === 0)
//       .map((num) => num * 3)
//       .reduce((acc, curr) => acc + curr);
//   }

// function myMap(array, callback) {
//     const myNewArray = [];
  
//     for (let i = 0; i < array.length; i++) {
//       const callbackResult = callback(array[i]);
//       myNewArray.push(callbackResult); 
//     }
  
//     return myNewArray;
//   }


//   const array2=['Hello','Good Morning', 'Australia']

//   function playWords()
//   {
//     for (let i=0; i<array2.length;i++)
//     {
//         console.log(array2[i]);
//         console.log(array2.length);
//     }
        
//   }


// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i]); // This is when the callback function gets called, or executed
//     }
//   }
  
//   // You would call it like this:
//   const myArry = [2, 3, 4, 2,10];
//   myForEach(myArry, (item) => {
//     console.log(item + 2); 
//   })




// function funkyFunction(music, LikeMusic) {
//     if (LikeMusic) {
//       console.log('Play: ' +  music);
//     }
//   }

//   const funkyFunction=function(music,LikeMusic)
//   {
//     if (LikeMusic)
//         {
//             console.log('Play:'+music);
//         }
//   }

//   const funkyFunction=(music,LikeMusic)=>
//   {
//     if (LikeMusic)
//     {
//         console.log('Play:'+music);
//     }
//   }

// const playThe = funky => funky + " music";
