const connect = require('./connect');

function logon(username,password,success) {

    const sql = `insert into user (usename,password) values (?,?)`;
    const parms = [username,password];
    const link = connect.createConnect()
    link.connect();
    link.query(sql,parms,function (err,result) {
        if(!err){
            success(result)
        }else {
            console.log(err)
        }
    })
    link.end();
}
module.exports = {
    logon
}