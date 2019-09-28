const stuMap = new Map();
const dao = require('../dao/stuDao');

function queryAll(request, resposn) {
    console.log(request.query);
    if (request.query.userId == undefined) {
        dao.daoQueryAll(function(result){
					resposn.writeHead(200);
      		        resposn.end(result);
				},function (fail) {
					resposn.writeHead(404);
					resposn.end(fail);
				})
    }
}
stuMap.set("stu/queryAll",queryAll);

function addStu() {

}
stuMap.set("stu/addStu",addStu);

function editStu() {

}
stuMap.set("stu/editStu",editStu);

function changeStu() {

}
stuMap.set("stu/changeStu",changeStu);


module.exports = stuMap;