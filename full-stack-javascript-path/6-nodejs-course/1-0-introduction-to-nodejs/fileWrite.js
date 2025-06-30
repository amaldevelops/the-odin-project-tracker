const fs = require('node:fs/promises');

async function example() {
  try {
    const content = 'Hello Amal!';
    await fs.writeFile('./test.txt', content,{flag:'a+'});
  } catch (err) {
    console.log(err);
  }
}

example();
