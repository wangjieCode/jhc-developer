const connect = require('./connect');
function changeDataBase(querysql, ...value){
    return new Promise(function (resolve,reject) {
        const read = connect.createConnect();
        read.connect();
        read.query(querysql,value,function (err, result) {
            typeof err == "object" ? resolve(result) : reject(err);
        });
        read.end();
    })
}
module.exports= {
    writeData(querysql, ...value){
        return changeDataBase(querysql, ...value)
    },
    readDatabase(querysql, ...value){
        return changeDataBase(querysql, ...value)
    },
};