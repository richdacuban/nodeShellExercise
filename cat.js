const fs = require('fs');

module.exports = function() {
  process.stdin.on('data', data => {
    const inputData = data
      .toString()
      .trim()
      .split(' ');
    let cmd = inputData[0];
    let filename = inputData[1];
    if (cmd === 'cat') {
      fs.readFile(filename, 'utf8', (err, file) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(file);
          process.stdout.write('\nprompt > ');
        }
      });
    }
  });
};
