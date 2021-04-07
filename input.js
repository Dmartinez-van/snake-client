const { INPUTS, ANTI, EMOTE } = require('./constants');

// stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  let keyPress;
  let previousKey;

  const handleUserInput = function() {
    // Could change 'data' to something like 'onKeyPress' because right now you can stop snake by hitting two movement keys
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      if (INPUTS[key]) {
        if (!(ANTI[key] === previousKey)) {
          previousKey = key;
          clearInterval(keyPress);
          if (INPUTS[key] === 'w' || INPUTS[key] === 's') {
            // Move slower in y axis than in x axis
            keyPress = setInterval(() => connection.write(INPUTS[key]), 120);
          } else {
            keyPress = setInterval(() => connection.write(INPUTS[key]), 40);
          }
        }
      } else if (EMOTE[key]) {
        connection.write(EMOTE[key]);
        // Don't_Stop_Me_Now.avi
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