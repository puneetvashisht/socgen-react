const fs = require('fs');

fs.readFile('./test.js', (err, data) => {
    if (err) throw err;
    console.log('Content of file ' + data);
  } );