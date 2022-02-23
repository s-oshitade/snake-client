const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("connecting ...");
const conn = connect();

setupInput(conn);
