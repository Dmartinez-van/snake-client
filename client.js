const net = require('net');
const { IP, PORT } = require('./constants');

// Establishs connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connection established!");
    conn.write("Name: DAVE");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('end', () => {
    console.log('client disconnected from server');
  });
  
  return conn;
};

module.exports = { connect };