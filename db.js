const mysql = require("mysql");

const db_config = {
    host: "127.0.0.1",
    user: "root",
    database: "web2.0",
    password: "testweb2.0"
};

var connection;

handleDisconnect= () => {
    connection = mysql.createConnection(db_config);
    connection.connect(err => {
        if(err) {
            console.log("Error connecting: " , err);
            setTimeout(handleDisconnect,2000);
        }
    });
    connection.on("error", err => {
        if(err.code === "PROTOCOL_CONNECTION_USER"){
            handleDisconnect();
        }else {
          throw err;
        }
    });
}

handleDisconnect();

module.exports = connection;