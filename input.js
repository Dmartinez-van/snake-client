// stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        connection.write("Move: up");
      }
      if (key === 'a') {
        connection.write("Move: left");
      }
      if (key === 's') {
        connection.write("Move: down");
      }
      if (key === 'd') {
        connection.write("Move: right");
      }
      if (key === 'g') {
        connection.write("Say: GG EZ");
      }
      if (key === 'e') {
        connection.write("Say: Winner coming thru!");
      }
      if (key === 'f') {
        connection.write("Say: :)");
      }
      if (key === 'f') {
        connection.write("Say: I'm lost, plz help :(");
      }
      if (key === 'r') {
        connection.write("Say: <(^ v ^ <)");
      }
      if (key === 't') {
        connection.write("Say: 🙅‍♂️");
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