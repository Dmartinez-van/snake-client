const { INPUTS } = require('./constants');

// stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      } else if (INPUTS[key] !== undefined) {
        connection.write(INPUTS[key]);
        // Tried setting key inputs to setInterval and setTimeout, interval crashed game and timeout did not do what was expected (a delay in movement from keypress)
        // setTimeout(() => (connection.write(INPUTS[key]), 8000));
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