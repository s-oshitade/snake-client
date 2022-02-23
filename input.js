const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY,DISPLAY_MESSAGE } = require("./constants");

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
    if (key === MOVE_UP_KEY) {
      connection.write("Move: up");
    }
    if (key === MOVE_LEFT_KEY) {
      connection.write("Move: left");
    }
    if (key === MOVE_DOWN_KEY) {
      connection.write("Move: down");
    }
    if (key === MOVE_RIGHT_KEY) {
      connection.write("Move: right");
    }
    for(const input in DISPLAY_MESSAGE){
      if (input === key){
        connection.write(`${DISPLAY_MESSAGE[input]}`);
      }
    }
});

module.exports = { setupInput }