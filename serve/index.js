const express = require('express');
const loader = require("./loader");

const app = new express();
app.use(express.static("./md"));
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Credentials","true");  //服务端允许携带cookie
	res.header(	"Access-Control-Allow-Origin", "*");  //允许的访问域
	res.header(	"Access-Control-Allow-Headers", "*");  //允许的访问域
	res.header("Access-Control-Allow-Headers");
	next();
});
app.post('/logon',loader.get('logon'));
app.post('/login',loader.get('login'));
app.get('/getUserId',loader.get('getUserId'));

app.get('/stu/queryAll', loader.get('stu/queryAll'));
app.post('/stu/addStu', loader.get('stu/addStu'));
app.get('/stu/editStu', loader.get('stu/editStu'));
app.post('/stu/changeStu', loader.get('stu/changeStu'));

app.post('/sys/editArticle', loader.get('sys/editArticle'));


app.listen(90,function () {
	console.log("服务已启动");
});