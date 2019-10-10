const { writeData,readDatabase } = require('./daoBase');

function editArticle(data,success, fail) {
	const id = new Date().getTime();
	const sql = `insert into article (id, userName, article, times) values (?,?,?,?);`
	writeData(sql,id,data.user, data.article, data.time).then( res => {
		success(res)
	}).catch( rej => {
		fail(rej)
	})
}

module.exports = {
	editArticle
}