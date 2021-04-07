const net = require('net');

// Establishs connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connection established!");
    conn.write("Name: t-t");
    // conn.write("Move: up");
    // setTimeout(() => conn.write("Move: up"), 100);
    // setInterval(() => conn.write("Move: right"), 50);
    // setTimeout(() => conn.write("Move: up"), 300);
  });

  // conn.on('connect', () => {
    
  // });


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

module.exports = { connect };