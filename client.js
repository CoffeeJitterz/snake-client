const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });
  //notifies when connection is succesfull
  conn.on('connect', () => {
    console.log('Your Snake Is In The Game!');
    conn.write('Name:  JAM');
   
  //  for(let i = 0; i < 100; i++){
  //    setTimeout(() => {
  //     conn.write("Move: up")
  //     conn.write("Move: left")
  //   }, 50 * i)
  //  }

  })

  //accepts incoming data from server
  conn.on('data',(data) => {
    console.log(data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;