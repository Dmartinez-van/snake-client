const { INPUTS } = require('./constants');

// stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  let keyPress;

  const handleUserInput = function() {
    stdin.on('data', (key) => {
      // Might have to reposition to not stop the snake each time we EMOTE
      clearInterval(keyPress);
      if (key === '\u0003') {
        process.exit();
      } else if (INPUTS[key] !== undefined) {
        // Snake currently doesn't
        keyPress = setInterval(() => connection.write(INPUTS[key]), 100);
      }
    });
  };
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput();
  return stdin;
};

module.exports = { setupInput };