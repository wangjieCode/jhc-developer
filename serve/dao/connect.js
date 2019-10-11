const mysql = require('mysql');

function createConnect(){
    return mysql.createConnection({
        host:"116.62.237.64",
        port:"3306",
        user:"root",
        password:"",
        database:"jhc_dev"
    });
}
// console.log(createConnect());
module.exports.createConnect = createConnect;