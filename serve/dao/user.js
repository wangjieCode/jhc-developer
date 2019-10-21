const { writeData,readDatabase } = require('./daoBase');

function logon(username,password,success,fail) {
    const sql = `insert into user (usename,password) values (?,?)`;
    const parms = [username,password];
    writeData(sql,username,password).then( result => success(result) )
        .catch( err => fail(err) );
}
// logon();
function login(username,success,fail) {
    const sql = `select password from user where usename = ?`;
    readDatabase(sql,username).then( result => success(result) )
        .catch( err => console.error(err) )
}
module.exports = {
    logon,
    login
};
//生成8位随机的id
function rander() {
    var returnStr = "",
        range = 8,
        charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(var i=0; i<range; i++){
        var index = Math.round(Math.random() * (charStr.length-1));
        returnStr += charStr.substring(index,index+1);
    }
    return returnStr;
}

function mmp() {
    const sql = `select * from '2myqlb9v'`;
    readDatabase(sql).then( result => console.log(result) )
        .catch( err => console.error(err) )
}
