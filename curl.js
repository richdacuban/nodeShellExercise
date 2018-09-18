const request = require('request');

module.exports = function() {
  process.stdin.on('data', data => {
    const inputData = data
      .toString()
      .trim()
      .split(' ');
    let cmd = inputData[0];
    let webAddress = inputData[1];
    if (cmd === 'curl') {
      request(webAddress, (err, response, body) => {
        if (err) {
          throw err;
        } /* else {*/
        // process.stdout.write('statusCode: ', response && response.statusCode);
        process.stdout.write('body: ', body);
        process.stdout.write('\nprompt > ');
        //  }
      });
    }
  });
};
