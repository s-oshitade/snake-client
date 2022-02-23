const { connect } = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin; //the returned stdin object will allow client to listen for keyboard input and react to it accordingly
};
const handleUserInput = function () {
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      // \u0003 maps to ctrl+c input
      process.exit();
    }
    if (key === "placeholder") {
    }
    if (key === "placeholder") {
    }
    if (key === "placeholder") {
    }
    if (key === "placeholder") {
    }
  });
};

connect();
setupInput();
