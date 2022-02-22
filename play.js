const net = require("net");

//// establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });
  //interpret incoming data as text
  conn.setEncoding("utf8");
  //send message to console to confirm connection to server
  conn.on("connect", () => {
    console.log("You're now connected!");
  });
  //handle incoming data upon connection
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting...");
connect();
