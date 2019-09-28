const { writeData,readDatabase } = require('./daoBase');

function daoQueryAll(success,fail,userId) {
	let sql = userId == undefined ? 'select * from student' : `select * from ${userId}`;
	readDatabase(sql).then(res => success(JSON.stringify(res)))
	.catch(rej => fail(rej))
}

function daoDddStu(userInfo,success, fail) {
	const { id , name , sex , email, address, edu} = userInfo;
	let sql = `insert into student (id,name,sex,edu,email,address) values (?,?,?,?,?,?)`;
	writeData(sql,id,name,sex,email,address,edu ).then(res => success(res))
		.catch(rej => fail(rej))
}
// daoDddStu(null,function (res) {
// 	console.log(res)
// }, function (rej) {
// 	console.log(rej)
// } );



function editStu(id,success,fail) {
	let sql = `delete from student where id = ${id};`
	writeData(sql).then(res => success(res))
		.catch(rej => fail(rej))
}

function changeStu(id,success,fail) {
	const sql = '';
	writeData(sql, id).then(res => success(res))
		.catch(rej => fail(rej))
}

module.exports = {
		daoQueryAll,
		daoDddStu,
		editStu
};