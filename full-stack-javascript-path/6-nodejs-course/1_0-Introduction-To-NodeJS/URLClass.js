// const myURL = new URL('/foo', 'https://example.org/');
// // https://example.org/foo

// console.log(myURL)


// import { URL } from 'node:url';
// console.log(URL === globalThis.URL); // Prints 'true'.


// let myURL = new URL('http://Example.com/', 'https://example.org/');
// // http://example.com/

// myURL = new URL('https://Example.com/', 'https://example.org/');
// // https://example.com/

// myURL = new URL('foo://Example.com/', 'https://example.org/');
// // foo://Example.com/

// myURL = new URL('http:Example.com/', 'https://example.org/');
// // http://example.com/

// myURL = new URL('https:Example.com/', 'https://example.org/');
// // https://example.org/Example.com/

// myURL = new URL('foo:Example.com/', 'https://example.org/');
// // foo:Example.com/

// console.log(myURL)


// const myURL = new URL('https://example.org/foo#bar');
// console.log(myURL.hash);
// // Prints #bar

// myURL.hash = 'baz';
// console.log(myURL.href);
// // Prints https://example.org/foo#baz


// const myURL = new URL('https://example.org:81/foo');
// console.log(myURL.host);
// // Prints example.org:81

// myURL.host = 'example.com:82';
// console.log(myURL.href);
// // Prints https://example.com:82/foo


// const myURL = new URL('https://example.org:81/foo');
// console.log(myURL.hostname);
// // Prints example.org

// // Setting the hostname does not change the port
// myURL.hostname = 'example.com';
// console.log(myURL.href);
// // Prints https://example.com:81/foo

// // Use myURL.host to change the hostname and port
// myURL.host = 'example.org:82';
// console.log(myURL.href);
// // Prints https://example.org:82/foo


const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.password);
// Prints xyz

myURL.password = '123';
console.log(myURL.href);
// Prints https://abc:123@example.com/