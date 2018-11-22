var mysql = require('mysql2');
var settings = {

    host: "localhost",
    user: "root",
    password: "",
    database: "snippet",
    multipleStatements: true,
    // waitForConnections: true,
    connectionLimit: 10
    // queueLimit: 0

};
var pool;
//pool==db
function connectDatabase() {
    if (!pool) {
        pool = mysql.createPool(settings);
        console.log(__dirname);

        //The pool will emit a connection event when a new connection is made within the pool. If you need to set session variables on the connection before it gets used, you can listen to the connection event.

        pool.on('connection', function (connection) {
          console.log('DB Connection established');

          connection.on('error', function (err) {
            console.error(new Date(), 'MySQL error', err.code);
          });
          connection.on('close', function (err) {
            console.error(new Date(), 'MySQL close', err);
          });

        });
        // The pool will emit an acquire event when a connection is acquired from the pool. This is called after all acquiring activity has been performed on the connection, right before the connection is handed to the callback of the acquiring code.

        pool.on('acquire', function (connection) {
          console.log('Connection %d acquired', connection.threadId);
        });

        // The pool will emit an enqueue event when a callback has been queued to wait for an available connection.

        pool.on('enqueue', function () {
          console.log('Waiting for available connection slot');
        });

        //The pool will emit a release event when a connection is released back to the pool. This is called after all release activity has been performed on the connection, so the connection will be listed as free at the time of the event.

        pool.on('release', function (connection) {
          console.log('Connection %d released', connection.threadId);
        });
    }
    return pool;
}

module.exports = connectDatabase();

// pool.end(function (err) {
//   // all connections in the pool have ended
// });