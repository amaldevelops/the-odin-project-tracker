const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Following will add a red text paragraph
const p1=document.createElement('p');
p1.classList.add('p1');
p1.textContent="Hey I’m red!";
p1.style.color='red';
container.appendChild(p1);

// Following will add a <h3> with blue text that says “I’m a blue h3!”

const header3 =document.createElement('h3');
header3.classList.add("header3");
header3.textContent="I’m a blue h3!";
header3.style.color="blue";
container.appendChild(header3);

/* Following will add a <div> with a black border and pink background color with the following elements inside of it:
1) Another <h1> that says “I’m in a div”
2) a <p> that says “ME TOO!”
3) Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const container2=document.querySelector('#container');
const content2=document.createElement('div');
content2.classList.add('content2');
// content2.textContent="This is a test";
const header1=document.createElement('h1');
header1.textContent="I’m in a div";
const paragraph1=document.createElement('p');
paragraph1.textContent="ME TOO!";
content2.style.border='1px solid black';
content2.style.backgroundColor='pink';


content2.appendChild(header1);
content2.appendChild(paragraph1);
container.appendChild(content2);
 
// Event Listeners lesson
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }

// btn.onclick = alertFunction();

// btn.addEventListener('click', alertFunction);


// btn.addEventListener('click', function (e) {
//     console.log(e);
//   });

//   btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'green';
  });
