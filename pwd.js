module.exports = function() {
  process.stdin.on('data', data => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
      console.log(__dirname);
      process.stdout.write('\nprompt > ');
    }
  });
};
