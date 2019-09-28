const stuMap = new Map();
const dao = require('../dao/stuDao');

function queryAll(request, resposn) {
    // console.log(request.query);
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

function addStu(request, resposn) {
	request.on('data',function(data){
		const tempinfo = JSON.parse(data.toString());
		console.log(tempinfo)
		dao.daoDddStu(tempinfo, function (res) {
			resposn.write(res)
			resposn.end();
		}, function (params) {
			resposn.end(params.toString())
		})
	})
}
stuMap.set("stu/addStu",addStu);

function editStu(request, resposn) {
	const id = request.query.id;
	dao.editStu(id, function (params) {
		resposn.writeHead(200);
	}, function (params) {
		resposn.writeHead(404);
		resposn.end('fail')
	})
}
stuMap.set("stu/editStu",editStu);

function changeStu() {

}
stuMap.set("stu/changeStu",changeStu);


module.exports = stuMap;