// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
// Async version

// import fs from 'node:fs';

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// Promise based 
import fs from 'node:fs/promises';

try {
  const data = await fs.readFile('./test.txt', { encoding: 'utf8' });
  console.log(data);
} catch (err) {
  console.log(err);
}
