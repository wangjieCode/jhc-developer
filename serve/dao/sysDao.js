const { writeData,readDatabase } = require('./daoBase');
function editArticle(data,success, fail) {
	const id = new Date().getTime().toString().slice(4,12);
	const sql = `insert into article (id, userName, article, times) values (?,?,?,?);`
	writeData(sql,id,data.user, data.article, data.time).then( res => {
		success(res)
	}).catch( rej => {
		fail(rej)
	})
}

function daogetAllArticle(success,fail,from, to){
	const sql = 'select  * from article;';
	readDatabase(sql).then( res => {
		success(res);
	}).catch( rej => {
		fail(rej);
	})
}
// editArticle(m, function (result) {
// 	console.log(result)
// },function (err) {
// 	console.log(err)
// })
module.exports = {
	editArticle,
	daogetAllArticle
};