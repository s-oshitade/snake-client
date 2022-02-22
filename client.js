const net = require("net");

//// establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });
  //interpret incoming data as text
  conn.setEncoding("utf8");
  //send messages to client console and server upon connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write('Name: SO');
    // conn.write('Hello from client!');
  });
  //handle incoming data upon connection
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting...");

module.exports = { connect }