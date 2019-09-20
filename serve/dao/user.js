// const connect = require('./connect');
const { writeData,readDatabase } = require('./daoBase');

function logon(username,password,success,fail) {
    const sql = `insert into user (usename,password) values (?,?)`;
    const parms = [username,password];
    writeData(sql,username,password).then( result => success(result) )
        .catch( err => fail(err) )
}
// logon("xiaoqiangmmp",'122342');
function login(username,success,fail) {
    const sql = `select password from user where usename = ?`;
    readDatabase(sql,username).then( result => success(result) )
        .catch( err => console.error(err) )
}

module.exports = {
    logon,
    login
};