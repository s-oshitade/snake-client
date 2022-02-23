let connection;
const stdin = process.stdin;

const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin; //the returned stdin object will allow client to listen for keyboard input and react to it accordingly
};
const handleUserInput = ('data', (key) => {
    if (key === "\u0003") { // \u0003 maps to ctrl+c input
      process.exit();
    }
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "z"){
      connection.write('Say: Ssssssss');
    }
    if (key === "x"){
      connection.write('Say: Ready or not?!');
    }
    if (key === "c"){
      connection.write('Say: Here I come...!!!')
    }
    if (key === "y"){
      connection.write('Say: Yes!!!')
    }
});

module.exports = { setupInput }