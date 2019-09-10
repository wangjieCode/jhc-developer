const mysql = require('mysql');

function createConnect(){
    return mysql.createConnection({
        host:"127.0.0.1",
        port:"3306",
        user:"root",
        password:"wj123456",
        database:"jhc_dev"
    });
}
module.exports.createConnect = createConnect;