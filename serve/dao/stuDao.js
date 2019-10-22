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

function changeStu(data,success,fail) {
	const sql = createChangeSql(data);
	writeData(sql).then(res => success(res))
		.catch(rej => fail(rej));
}
function createChangeSql(data){
	let baseSql = `update student set `;
	for( prop in data){
		if(prop == 'id') continue;
		baseSql += `${prop}='${data[prop]}',`
	}
	return baseSql.slice(0,baseSql.length-1)  + ` where id=${data.id}`;
}

module.exports = {
		daoQueryAll,
		daoDddStu,
		editStu,
		changeStu
};