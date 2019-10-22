const stuMap = new Map();
const dao = require('../dao/stuDao');

function queryAll(request, resposn) {
    // console.log(request.query);
    if (request.query.userId == undefined) {
        dao.daoQueryAll(function(result){
					resposn.writeHead(200);
					console.log(result);
					resposn.write(result);
      		        resposn.end('');
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
		dao.daoDddStu(tempinfo, function (res) {
			resposn.write("添加成功");
			resposn.end();
		}, function (params) {
			resposn.writeHead(200);
			resposn.end(params.toString())
		})
	})
}
stuMap.set("stu/addStu",addStu);

function editStu(request, resposn) {
	const id = request.query.id;
	console.log(id)
	if(!id)return resposn.end("缺少参数");
	dao.editStu(id, function (params) {
		resposn.writeHead(200);
		resposn.end('ok');
	}, function (params) {
		resposn.writeHead(200);
		resposn.end('fail')
	})
}
stuMap.set("stu/editStu",editStu);

function changeStu(request, resposn) {
	request.on('data',function (data) {
		data = JSON.parse(data);
		const { id } = data;
		if(!id) return resposn.end('缺少id');
		dao.changeStu(data,function () {
			resposn.writeHead(200);
			resposn.end("修改成功");
		},function (fail) {
			resposn.end(fail.toString());
		})
	})
}
stuMap.set("stu/changeStu",changeStu);


module.exports = stuMap;