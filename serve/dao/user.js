// const connect = require('./connect');
const { writeData,readDatabase } = require('./daoBase');

function logon(username,password,success,fail) {
    const sql = `insert into user (usename,password) values (?,?)`;
    const parms = [username,password];
    writeData(sql,username,password).then( result => success(result) )
        .catch( err => fail(err) );
    // const tempId = rander();
    // const setuserID = `insert into user2table (user,userId) values (?,?)`;
    // writeData(setuserID,username,tempId).then(res => console.log(res))
    //     .catch( rej => console.log(rej))
    // setTimeout(_ => {
    //     const sql = `CREATE TABLE \`jhc_dev\`.\`?\` (
    //                   \`id\` INT NOT NULL,
    //                   \`name\` VARCHAR(5) NOT NULL,
    //                   \`sex\` TINYINT NOT NULL,
    //                   \`edu\` VARCHAR(45) NOT NULL,
    //                   \`email\` VARCHAR(45) NOT NULL,
    //                   \`address\` VARCHAR(45) NOT NULL,
    //                   PRIMARY KEY (\`id\`),
    //                   UNIQUE INDEX \`id_UNIQUE\` (\`id\` ASC))
    //                 ENGINE = InnoDB
    //                 DEFAULT CHARACTER SET = utf8
    //                 COLLATE = utf8_bin;`
    //     writeData(sql,tempId).then(res => console.log(res))
    //         .catch( rej => console.log(rej))
    // },1000)
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
// mmp()