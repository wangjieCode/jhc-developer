const express = require('express');
const loader = require("./loader");

const app = new express();

app.use(express.static("./dist/"));
/*
* 	设置跨域访问
* */
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Credentials","true");  //服务端允许携带cookie
	res.header(	"Access-Control-Allow-Origin", "*");  //允许的访问域
	res.header(	"Access-Control-Allow-Headers", "*");  //允许的访问域
	res.header("Access-Control-Allow-Headers");
	next();
});
/*
* 	平台注册相关
* */
app.post('/logon',loader.get('logon'));
app.post('/login',loader.get('login'));
app.get('/getUserId',loader.get('getUserId'));
/*
* 	学生信息管理系统公共版
* */
app.get('/stu/queryAll', loader.get('stu/queryAll'));
app.post('/stu/addStu', loader.get('stu/addStu'));
app.get('/stu/editStu', loader.get('stu/editStu'));
app.post('/stu/changeStu', loader.get('stu/changeStu'));
/*
* 	文章相关
* */
app.post('/sys/editArticle', loader.get('sys/editArticle'));
app.get('/sys/getArticleAll', loader.get('sys/getArticleAll'));
app.get('/sys/getArticle', loader.get('sys/getArticle'));

app.listen(80,function () {
	console.log("服务已启动");
});