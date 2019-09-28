const { writeData,readDatabase } = require('./daoBase');

function daoQueryAll(success,fail,userId) {
	let sql = userId == undefined ? 'select * from student' : `select * from ${userId}`;
	readDatabase(sql).then(res => success(JSON.stringify(res)))
	.catch(rej => fail(rej))
}

function daoDddStu(success, fail, userId) {
	let sql = userId == undefined ? 'insert into student (id,name,sex,edu,email,address) values (20180101,王杰,0,本科,1787612871@qq.com,山西长治 )' : `select * from ${userId}`;
	console.log(sql)
	writeData(sql).then(res => console.log(JSON.stringify(res)))
		.catch(rej => console.log(rej))
}
daoDddStu()

module.exports = {
		daoQueryAll,
		daoDddStu
};