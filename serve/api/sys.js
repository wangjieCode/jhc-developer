const sysMap = new Map();
const sysDao = require('../dao/sysDao');

function editArticle(request, resposn) {
	request.on('data',function (data) {
    const temp = JSON.parse(data.toString());
		console.log(temp)		
		sysDao.editArticle(data, function (params) {
			
		}, function (params) {
			
		})
	})
}
sysMap.set('sys/editArticle', editArticle)

module.exports = sysMap;