const PLAYER_INITIALS = process.argv.slice(2);
const IP = "10.0.2.15";
const PORT = 50541;
const MOVE_UP_KEY = "w";
const MOVE_LEFT_KEY = "a";
const MOVE_DOWN_KEY = "s";
const MOVE_RIGHT_KEY = "d";
const DISPLAY_MESSAGE = {
  c: "Say: Here I come!",
  x: "Say: Ready or not?!",
  y: "Say: Yes!!!",
  z: "Say: Ssssssss",
};

module.exports = {
  PLAYER_INITIALS,
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_KEY,
  DISPLAY_MESSAGE,
};
