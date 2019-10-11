const sysMap = new Map();
const sysDao = require('../dao/sysDao');

function editArticle(request, resposn) {
	request.on('data',function (data) {
    const temp = JSON.parse(data.toString());
		console.log(temp)		
		sysDao.editArticle(temp, function (params) {
			resposn.end('ok');
		}, function (params) {
			resposn.end('fail');
		})
	})
}
sysMap.set('sys/editArticle', editArticle);

function getArticleAll(request, resposn){
	sysDao.daogetAllArticle(function (result) {
		const temp = JSON.stringify(result);
		// console.log(temp);
		resposn.write(temp);
		resposn.end();
	}, function (err) {
		// console.log(err);
		resposn.end('fail');
	})
}

sysMap.set('sys/getArticleAll',getArticleAll );

function getArticle(request, resposn){
	const id = request.query.id;
	console.log(id);
	sysDao.getArticleById(id,function (parms) {
		const temp = JSON.stringify(parms);
		resposn.end(temp);
	},function (rej) {
		// console.log(rej);
		resposn.end("notFound");
	})
}

sysMap.set('sys/getArticle',getArticle );

module.exports = sysMap;