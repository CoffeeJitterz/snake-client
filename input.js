const connect = require("./client");

let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  const handleUserInput = function (key) {
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key ==='a') {
      conn.write("Move: left");
    }
    if (key ==='s') {
      conn.write("Move: down");
    }
    if (key ==='d') {
      conn.write("Move: right");
    }
    if (key === 'e'){
      conn.write("Say: 'OUT OF MY WAY")
    }
    if (key === 'q'){
      conn.write("Say: 'Ssssssssssssssssssssssssssssssssssssssssory sucker")
    }
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = setupInput;