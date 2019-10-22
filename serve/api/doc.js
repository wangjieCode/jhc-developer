const docMap = new Map();
const dao = require('../dao/daoBase');
console.log(dao)
function queryinID(request, respose){
    console.log(111)
    const sql = `select * from inerface where id=1`;
    dao.readDatabase(sql).then( res => {
        respose.end(JSON.stringify(res));
    }).catch( rej => {
        respose.end('fail')
    })
}
docMap.set('doc/queryID',queryinID);


module.exports = docMap;