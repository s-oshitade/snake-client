const net = require("net");
const { HOST, PORT, PLAYER_INITIALS } = require('./constants');

//// establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: PORT,
  });
  //interpret incoming data as text
  conn.setEncoding("utf8");
  //send messages to client console and server upon connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write(`Name: ${PLAYER_INITIALS}`);
  });
  //handle incoming data upon connection
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
