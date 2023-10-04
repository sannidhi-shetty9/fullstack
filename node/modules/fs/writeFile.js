const fs = require('fs');

const data = 'Hello, world!';

fs.writeFile('output.txt', data, 'utf8', (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Data has been written to the file.');
});
